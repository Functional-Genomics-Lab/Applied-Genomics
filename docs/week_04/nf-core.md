---
id: nf-core
title: nf-core
description: 'A community effort to collect a curated set of analysis pipelines built using Nextflow.'
sidebar_label: 'nf-core'
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

## What's nextflow?

Nextflow is an incredibly powerful and flexible workflow language. It's mainly used for bioinformatics analysis.

```nextflow title="rnatoy.nf"
#!/usr/bin/env nextflow

/*
 * Defines some parameters in order to specify the refence genomes
 * and read pairs by using the command line options
 */
params.reads = "$baseDir/data/ggal/*_{1,2}.fq"
params.annot = "$baseDir/data/ggal/ggal_1_48850000_49020000.bed.gff"
params.genome = "$baseDir/data/ggal/ggal_1_48850000_49020000.Ggal71.500bpflank.fa"
params.outdir = 'results'

/*
 * Create the `read_pairs_ch` channel that emits tuples containing three elements:
 * the pair ID, the first read-pair file and the second read-pair file
 */
Channel
    .fromFilePairs( params.reads )
    .ifEmpty { error "Cannot find any reads matching: ${params.reads}" }
    .set { read_pairs_ch }

/*
 * Step 1. Builds the genome index required by the mapping process
 */
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

/*
 * Step 2. Maps each read-pair by using Tophat2 mapper tool
 */
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

/*
 * Step 3. Assembles the transcript by using the "cufflinks" tool
 */
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

## nf-core Intro

<iframe width="560" height="315" src="https://www.youtube.com/embed/gUM9acK25tQ"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

> A community effort to collect a curated set of analysis pipelines built using
> Nextflow.

We have the genomics core, imaging core, etc. core facilities, and nf-core!

Enough talk, let's run it!

### Testing a pipeline

[nf-core installation docs](https://nf-co.re/usage/installation)

1. Make a new directory in your scratch called `rnaseq` and open it up.
2. Install Nextflow

```bash
curl -fsSL get.nextflow.io | bash
```

3. Activate singularity

```bash
ml load singularity
```

4. Run

```bash
nextflow run nf-core/rnaseq -profile test,utd_sysbio
```

## Finding some data

There are lots of ways to shop for data.

### [SRA Explorer](https://sra-explorer.info/)

1. Search "covid rnaseq"
2. Click the check box next to the runs you want
3. Scroll up and click "Add datasets to collection"
4. Open up your cart
5. Open up the bash script for downloading the fastq files
6. Move the bash script to sysbio
7. Run the script to download the data

### nf-core/fetchngs

2. Click on the SRA accession number
3. Click on the run
4. Copy the Bioproject
5. Open up run Selector and paste in the bioproject accession number
6. Click on "Accession List" to download the list

```txt
SRR14607635
SRR14607636
SRR14607637
SRR14607638
SRR14607639
SRR14607640
SRR14607641
SRR14607642
```

7. Move the file over to sysbio

```bash
scp Downloads/SRR_Acc_List.txt sysbio:/scratch/applied-genomics/cov-t-rnaseq
```

8. Use the nf-core/fetchngs pipeline

```bash
nextflow run nf-core/fetchngs --input SRR_Acc_List.txt -profile utd_sysbio
```

[SRA Run Selector](https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA731518&o=acc_s%3Aa)

## Running the nf-core pipeline

[Refer to the usage section of the pipeline's docs](https://nf-co.re/rnaseq/3.1/usage)

### Using the nf-core launcher

1. [Open up the nf-core launch utility](https://nf-co.re/launch?)
2. Select the `rnaseq` pipeline and click Launch
3. Fill out the following command-line flags:

   - profile: `utd_sysbio`
   - input: `samplesheet.csv`
   - email: `<netid>@utdallas.edu`
   - genome: `GRCh37`

4. Create a file with the `nf-params.json` file it generates.

```json title="nf-params.json"
{
  "input": "samplesheet.csv",
  "email": "<netid>@utdallas.edu",
  "genome": "GRCh37"
}
```

5. We're going to need to create a samplesheet. [Please refer to the usage section of the pipeline's docs](https://nf-co.re/rnaseq/3.1/usage)

The data has been predownloaded for you to the group scratch directory
`/scratch/applied-genomics/` under `cov-t-rnaseq`

```csv title="samplesheet.csv"
sample,fastq_1,fastq_2,strandedness
patient1_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607635_GSM5328143_PS_CD8_T_cells_patient1_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient2_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607636_GSM5328144_PS_CD8_T_cells_patient2_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient3_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607637_GSM5328145_PS_CD8_T_cells_patient3_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient4_plus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607638_GSM5328146_PS_CD8_T_cells_patient4_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient1_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607639_GSM5328147_PS-_CD8_T_cells_patient1_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient2_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607640_GSM5328148_PS-_CD8_T_cells_patient2_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient3_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607641_GSM5328149_PS-_CD8_T_cells_patient3_Homo_sapiens_RNA-Seq.fastq.gz,,forward
patient4_minus_rep1,/scratch/applied-genomics/cov-t-rnaseq/SRR14607642_GSM5328150_PS-_CD8_T_cells_patient4_Homo_sapiens_RNA-Seq.fastq.gz,,forward
```

:::tip
If you can't get the formatting right for whatever reason there's a backup samplesheet at `/scratch/applied-genomics/cov-t-rnaseq/samplesheet.csv` just need to update the input path
:::

```json title="nf-params.json"
{
  "input": "samplesheet.csv",
  "email": "<netid>@utdallas.edu",
  "genome": "GRCh37"
}
```

6. Start `screen` which is a screen manager

```bash
login$ screen
```
:::info
Useful screen commands
:::

```bash
# Start a new screen session:
screen

# Start a new named screen session:
screen -S session_name

# Reattach to an open screen:
screen -r session_name

# Detach from inside a screen:
    Ctrl + A, D

# Kill the current screen session:
    Ctrl + A, K
```

7. Launch the pipeline

```bash
nextflow run nf-core/rnaseq -r 3.2 -params-file nf
```

The pipeline should start up, and email you when it's finished!


## Download the Multiqc Report

1. Open up the file explorer and navigate to
   `results/multiqc/star_salmon/multiqc_report.html` and *right-click* the html
   file and select Download.
2. Now that the multiqc report is on your local computer open it up in a web
   browser. Preferably next to the [pipeline's output
   docs](https://nf-co.re/rnaseq/3.2/output).

   Some files of note:
   `results/salmon/*.tsv`: Various gene and transcript counts
   `results/star_salmon/*.bam`: Aligned bam files