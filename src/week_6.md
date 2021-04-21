# TODO {#lecture}

# ChIP-Seq Preprocessing {#lab}

## Finding Data

Using SRA-explorer

### Finding controls

Using Encode

#### [Terms](https://www.encodeproject.org/data-standards/terms/)

Isogenic replication
: Biological replication. Two replicates from biosamples derived from the same
human donor or model organism strain. These biosamples have been treated
separately (i.e. two growths, two separate knockdowns, or two different
excisions).

Technical replication
: Two replicates from the same biosample, treated identically for each replicate
(e.g. same growth, same knockdown).

#### NP Control

ENCSR295GGT_files.txt

```txt
https://www.encodeproject.org/files/ENCFF557BAE/@@download/ENCFF557BAE.fastq.gz
https://www.encodeproject.org/files/ENCFF125ETQ/@@download/ENCFF125ETQ.fastq.gz
https://www.encodeproject.org/files/ENCFF066LAE/@@download/ENCFF066LAE.fastq.gz
https://www.encodeproject.org/files/ENCFF078PNM/@@download/ENCFF078PNM.fastq.gz
https://www.encodeproject.org/files/ENCFF202WAI/@@download/ENCFF202WAI.fastq.gz
```

```bash
xargs -n 1 curl -O -L < ENCSR295GGT_files.txt
```

## Creating a samplesheet
