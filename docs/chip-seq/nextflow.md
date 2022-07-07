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

```groovy title="main.nf"
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

## Subworkflows

```groovy title="./modules/rnaseq.nf"
params.outdir = 'results'

include { INDEX } from './index'
include { QUANT } from './quant'
include { FASTQC } from './fastqc'

workflow RNASEQ {
  take:
    transcriptome
    read_pairs_ch

  main:
    INDEX(transcriptome)
    FASTQC(read_pairs_ch)
    QUANT(INDEX.out, read_pairs_ch)

  emit:
     QUANT.out | concat(FASTQC.out) | collect
}
```

## Modules

```groovy title="./modules/index.nf"
process INDEX {
    tag "$transcriptome.simpleName"

    input:
    path transcriptome

    output:
    path 'index'

    script:
    """
    salmon index --threads $task.cpus -t $transcriptome -i index
    """
}
```

[The full nextflow/rnaseq-nf example repo](https://github.com/nextflow-io/rnaseq-nf)
