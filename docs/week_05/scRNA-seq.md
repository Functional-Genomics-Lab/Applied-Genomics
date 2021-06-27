---
id: scrnaseq
title: scRNA-Seq
description: ''
sidebar_label: 'scRNA-Seq'
sidebar_position: 2
---

# [theislab/single-cell-tutorial](https://github.com/theislab/single-cell-tutorial)

[Current best practices in single-cell RNA-seq analysis: a tutorial](https://pubmed.ncbi.nlm.nih.gov/31217225/)

## Adjustments to run it on sysbio

```bash
login $ git clone https://github.com/theislab/single-cell-tutorial.git
login $ cd single-cell-tutorial
```

The example data has already been downloaded to save time and space. We need to soft link the data to our repo

```bash
login $ ln -s /scratch/applied-genomics/scrnaseq/data data
```

Start the container on a computer node

```
login $ srun --pty bash
sysbio-0 $ ml load singularity
sysbio-0 $ singularity exec /scratch/applied-genomics/scrnaseq/single-cell-analysis_210114.sif jupyter-lab
```

4. Open another terminal and login to the compute node with port forwarding.

```bash
login $ ssh sysbio-1 -L 8888:localhost:8888
```

5. Go back to the first terminal and copy the jupyterlab link into your local browser. It should look something like `http://localhost:8888/lab?token=4d08d209468541b333109fc4f957c8b3d1c97bed59072148`
