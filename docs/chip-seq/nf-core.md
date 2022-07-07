---
id: nf-core
title: nf-core
description: 'A community effort to collect a curated set of analysis pipelines built using Nextflow.'
sidebar_label: 'nf-core'
sidebar_position: 3
---

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
