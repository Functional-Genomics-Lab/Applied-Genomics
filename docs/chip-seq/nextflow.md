---
id: nextflow
title: Nextflow
description: 'Data-driven computational pipelines'
sidebar_label: 'Nextflow'
sidebar_position: 2
---

## Workflow managers

The `Makefile` has been getting a little scary. It's great for one off commands
for a project, but not so much for full blown data pipelines. There are plenty
of more modern alternatives.

- [CWL](https://www.commonwl.org/user_guide/index.html)
- [WDL](https://github.com/openwdl/wdl)
- [Snakemake](https://snakemake.readthedocs.io/en/stable/)
- [Nextflow](https://www.nextflow.io/)

## What is Nextflow?

Nextflow is an incredibly powerful and flexible workflow language. It's mainly
used for bioinformatics analysis.

```nextflow
#!/usr/bin/env nextflow

/\*

- Defines some parameters in order to specify the refence genomes
- and read pairs by using the command line options
  _/
  params.reads = "$baseDir/data/ggal/_\_{1,2}.fq"
  params.annot = "$baseDir/data/ggal/ggal_1_48850000_49020000.bed.gff"
params.genome = "$baseDir/data/ggal/ggal_1_48850000_49020000.Ggal71.500bpflank.fa"
  params.outdir = 'results'

/\*

- Create the `read_pairs_ch` channel that emits tuples containing three elements:
- the pair ID, the first read-pair file and the second read-pair file
  \*/
  Channel
  .fromFilePairs( params.reads )
  .ifEmpty { error "Cannot find any reads matching: ${params.reads}" }
  .set { read_pairs_ch }

/\*

- Step 1. Builds the genome index required by the mapping process
  \*/
  process buildIndex {
  tag "$genome.baseName"

      input:
      path genome from params.genome

      output:
      path 'genome.index*' into index_ch

      """
      bowtie2-build --threads ${task.cpus} ${genome} genome.index
      """

  }

/\*

- Step 2. Maps each read-pair by using Tophat2 mapper tool
  \*/
  process mapping {
  tag "$pair_id"

      input:
      path genome from params.genome
      path annot from params.annot
      path index from index_ch
      tuple val(pair_id), path(reads) from read_pairs_ch

      output:
      set pair_id, "accepted_hits.bam" into bam_ch

      """
      tophat2 -p ${task.cpus} --GTF $annot genome.index $reads
      mv tophat_out/accepted_hits.bam .
      """

  }

/\*

- Step 3. Assembles the transcript by using the "cufflinks" tool
  \*/
  process makeTranscript {
  tag "$pair_id"
  publishDir params.outdir, mode: 'copy'

      input:
      path annot from params.annot
      tuple val(pair_id), path(bam_file) from bam_ch

      output:
      tuple val(pair_id), path('transcript_*.gtf')

      """
      cufflinks --no-update-check -q -p $task.cpus -G $annot $bam_file
      mv transcripts.gtf transcript_${pair_id}.gtf
      """

  }
```

### DSL2 makes it a lot easier to follow

```nextflow
/*
 * Default pipeline parameters. They can be overriden on the command line eg.
 * given `params.foo` specify on the run command line `--foo some_value`.
 */

params.reads = "$baseDir/data/ggal/*_{1,2}.fq"
params.transcriptome = "$baseDir/data/ggal/ggal_1_48850000_49020000.Ggal71.500bpflank.fa"
params.outdir = "results"
params.multiqc = "$baseDir/multiqc"

log.info """\
 R N A S E Q - N F   P I P E L I N E
 ===================================
 transcriptome: ${params.transcriptome}
 reads        : ${params.reads}
 outdir       : ${params.outdir}
 """

// import modules
include { RNASEQ } from './modules/rnaseq'
include { MULTIQC } from './modules/multiqc'

/*
 * main script flow
 */
workflow {
  read_pairs_ch = channel.fromFilePairs( params.reads, checkIfExists: true )
  RNASEQ( params.transcriptome, read_pairs_ch )
  MULTIQC( RNASEQ.out, params.multiqc )
}

/*
 * completion handler
 */
workflow.onComplete {
    log.info ( workflow.success ? "\nDone! Open the following report in your browser --> $params.outdir/multiqc_report.html\n" : "Oops .. something went wrong" )
}
```

The thing that sets Nextflow apart is that it _pushes_ the data through the
pipeline, rather than _pulling_ it through like make.

We're not going to cover how to write Nextflow scripts, but if you'd like to use
them for your project you're welcome to learn.
