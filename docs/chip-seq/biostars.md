---
id: biostars
title: Biostars ChIP-Seq
description: 'Notes and issues we ran into'
sidebar_label: 'Biostars'
sidebar_position: 1
---

Replace

```sh
# Create a namespace for the tool
conda create --name macs python=2.7

# Activate the new environment.
source activate macs

# Install the tools.
conda install numpy
conda install macs2
```

with

```sh
conda create -n macs bioconda::macs2=2.2.7.1
```

```csv
sample,fastq_1,fastq_2,antibody,control
WT_YAP1,/scratch/applied-genomics/chipseq/ming/SRR1810900.fastq,,YAP1,WT_INPUT
WT_H3K27ac,/scratch/applied-genomics/chipseq/ming/SRR949140.fastq,,H3K27ac,WT_INPUT
WT_INPUT,/scratch/applied-genomics/chipseq/ming/SRR949142.fastq,,,
```

```
nextflow run JoseEspinosa/nf-core-chipseq --input samplesheet.csv --genome hg19 -profile singularity,utd_sysbio --outdir results -r macs_gsize_update --read_length 50
```
