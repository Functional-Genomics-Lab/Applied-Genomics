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

1. Move into your chipseq repo
2. Install Nextflow

```bash
curl -fsSL get.nextflow.io | bash
mv nextflow ~/bin
```

3. Activate singularity

```bash
ml load singularity
```

4. Run

```bash
nextflow run nf-core/chipseq -profile test,utd_sysbio -r dev --outdir test-run
```

5. Update your `.gitignore`

```gitignore
.nextflow*
work/
data/
results/
```

## Running the nf-core pipeline

[Let's refer to the usage section of the pipeline's docs](https://nf-co.re/chipseq/dev/usage)

### Using the nf-core launcher

1. [Open up the nf-core launch utility](https://nf-co.re/launch?)
2. Select the `chipseq` pipeline, `dev` for the version and click Launch
3. Fill out the following command-line flags:

   - profile: `utd_sysbio`
   - input: `samplesheet.csv`
   - email: `<netid>@utdallas.edu`
   - read_length: 50
   - genome: `hg19`

4. Create a file with the `nf-params.json` file it generates.

```json title="nf-params.json"
{
  "input": "samplesheet.csv",
  "read_length": 50,
  "outdir": "ming-results",
  "email": "<netid>@utdallas.edu",
  "genome": "hg19"
}
```

5. We're going to need to create a samplesheet. [Please refer to the usage section of the pipeline's docs](https://nf-co.re/chipseq/dev/usage)

The data has been predownloaded for you to the class scratch directory
`/scratch/applied-genomics/` under `chipseq/ming/`.

```csv title="samplesheet.csv"
sample,fastq_1,fastq_2,antibody,control
WT_YAP1,/scratch/applied-genomics/chipseq/ming/SRR1810900.fastq.gz,,YAP1,WT_INPUT
WT_H3K27ac,/scratch/applied-genomics/chipseq/ming/SRR949140.fastq.gz,,H3K27ac,WT_INPUT
WT_INPUT,/scratch/applied-genomics/chipseq/ming/SRR949142.fastq.gz,,,
```

:::tip
If you can't get the formatting right for whatever reason there's a backup samplesheet at `/scratch/applied-genomics/chipseq/ming/samplesheet.csv` just need to update the input path
:::

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
nextflow run nf-core/chipseq -r dev -profile utd_sysbio -params-file nf-params.json
```

The pipeline should start up, and email you when it's finished!

While we're waiting let's check out the [shell script that would've ran all of that](https://www.biostarhandbook.com/ming-tangs-guide-to-chip-seq-analysis.html#shell-script-comes-to-rescue)

## Download the Multiqc Report

1. Open up the file explorer and navigate to
   `results/multiqc/multiqc_report.html` and _right-click_ the html
   file and select Download.
2. Now that the multiqc report is on your local computer open it up in a web
   browser. Preferably next to the [pipeline's output
   docs](https://nf-co.re/chipseq/dev/output).
