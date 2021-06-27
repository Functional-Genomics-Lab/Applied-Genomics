# Assignment 3


Summary: Create a counts file for SARS‑CoV‑2 alignment and genes.

Things that will be checked for:

1. Make rules to download the data (**2 points**)
https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/genome/genome.gtf
https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/illumina/bam/test.paired_end.sorted.bam

You'll need to use the -O flag to change the name of the output file with wget. Here's one of the rules as an example

```Makefile
sars_genome.gtf:
    wget -O cov_genome.gtf https://github.com/nf-core/test-datasets/raw/modules/data/genomics/sarscov2/genome/genome.gtf
```

2. Add a second batch script (`submit_cov.sh` works) to run featurecounts with the sarscov2 data (**2 points**)

You'll need to use `featureCounts -t gene ...` instead of `featureCounts -t exon ...` because there aren't any exons in the cov_genome.gtf

3. Create 3 new make rules, one to run the "test" batch job, one to run the "sarscov2" data, and at the top an all rule, that should call the download targets and then the job targets like below (**4 points**)

```Makefile
all: download_data featurecounts
```

4. Submit your cov_counts.txt file on eLearning (**2 points**)

Choose one only one bonus question(if any), you won't get extra credit for doing both.

Bonus 1 (**5 points**):

Generalize your make rules for feature counts with wildcards

- http://web.mit.edu/gnu/doc/html/make_4.html#SEC22

Bonus 2 (**5 points**):

Use slurm job arrays to use one only one batch script for both of the featureCount runs. Some resources(note this wasn't covered in class):

- https://github.com/Functional-Genomics-Lab/useful-scripts/blob/e377885121dc62116c07d7f2cb32fbaac7935be4/bwa.sh#L3
- https://www.biostars.org/p/338078/
- https://slurm.schedmd.com/job_array.html

You can use -t gene with the homo_sapians data set we used in class as well.
