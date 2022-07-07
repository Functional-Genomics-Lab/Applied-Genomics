---
id: scrnaseq
title: scRNA-Seq
description: ''
sidebar_label: 'scRNA-Seq'
sidebar_position: 2
---

#### GitHub Repo

[theislab/single-cell-tutorial](https://github.com/theislab/single-cell-tutorial)

#### Paper

[Current best practices in single-cell RNA-seq analysis: a tutorial](https://pubmed.ncbi.nlm.nih.gov/31217225/)

## Adjustments to run it on sysbio

```bash
login $ git clone https://github.com/theislab/single-cell-tutorial.git
login $ cd single-cell-tutorial
```

Download the example data (This is all on the login node)

```bash
mkdir -p data/Haber-et-al_mouse-intestinal-epithelium/
cd data/Haber-et-al_mouse-intestinal-epithelium/
wget ftp://ftp.ncbi.nlm.nih.gov/geo/series/GSE92nnn/GSE92332/suppl/GSE92332_RAW.tar
mkdir GSE92332_RAW
tar -C GSE92332_RAW -xvf GSE92332_RAW.tar
gunzip GSE92332_RAW/*_Regional_*
wget ftp://ftp.ncbi.nlm.nih.gov/geo/series/GSE92nnn/GSE92332/suppl/GSE92332_Regional_UMIcounts.txt.gz
gunzip GSE92332_Regional_UMIcounts.txt.gz
```

Start the container on a compute node

<!-- TODO Make this a batch script -->

```bash
login $ srun --pty bash
sysbio-0 $ ml load singularity
sysbio-0 $ singularity exec /scratch/applied-genomics/scrnaseq/single-cell-analysis_210114.sif bash
```

and then paste the following in to set the environment properly:

```bash
export LD_LIBRARY_PATH=/opt/R/lib/R/lib
export SHELL=/bin/bash
export TERM=xterm-256color
export LANG=en_US.UTF-8
echo $PATH
export PATH=/opt/python/bin:/opt/R/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

and fire up jupyterlab

```bash
jupyter-lab --no-browser --ip=0.0.0.0
```

4. Open another terminal and login to the compute node with port forwarding.

```bash
login $ ssh sysbio-1 -L 8888:localhost:8888
```

5. Go back to the first terminal and copy the jupyterlab link into your local browser. It should look something like `http://localhost:8888/lab?token=4d08d209468541b333109fc4f957c8b3d1c97bed59072148`


When you finish consider cleaning out the example data to save space on the server