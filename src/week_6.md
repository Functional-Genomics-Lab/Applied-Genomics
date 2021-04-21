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

#### [MEF Control](https://www.encodeproject.org/experiments/ENCSR000CBB/)

mef_files.txt

```txt
"https://www.encodeproject.org/metadata/?type=Experiment&accession=ENCSR000CBB&files.output_category=raw+data&files.output_type=reads&files.status=released"
https://www.encodeproject.org/files/ENCFF001KPR/@@download/ENCFF001KPR.fastq.gz
https://www.encodeproject.org/files/ENCFF001KPS/@@download/ENCFF001KPS.fastq.gz
```

```bash
xargs -n 1 curl -O -L < mef_files.txt
```

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

#### ES Control

es_control.txt

```txt
"https://www.encodeproject.org/metadata/?type=Experiment&accession=ENCSR000ADJ&files.output_category=raw+data&files.output_type=reads&files.status=released"
https://www.encodeproject.org/files/ENCFF001NNN/@@download/ENCFF001NNN.fastq.gz
https://www.encodeproject.org/files/ENCFF001NNP/@@download/ENCFF001NNP.fastq.gz
```

#### Brain Control

brain_control.txt

```txt
"https://www.encodeproject.org/metadata/?type=Experiment&accession=ENCSR000CDB&files.output_category=raw+data&files.output_type=reads&files.status=released"
https://www.encodeproject.org/files/ENCFF001LAO/@@download/ENCFF001LAO.fastq.gz
https://www.encodeproject.org/files/ENCFF786ODW/@@download/ENCFF786ODW.fastq.gz
```

```bash
xargs -n 1 curl -O -L < brain_control.txt
```

## Creating a samplesheet
