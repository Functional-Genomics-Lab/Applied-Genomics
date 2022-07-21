---
id: jupyter_slurm
title: Running Jupyter Notebooks on Slurm Nodes
description: ''
sidebar_label: 'Jupyter on Slurm'
sidebar_position: 2
---

So we want to crunch some big numbers, but we also want the flexibility and
quick iterations that [Jupyter](../week_02/jupyter) gives us.

## Setup the Conda Environment

Using VS Code, login to sysbio.


0. Create a conda environment with jupyter-lab

:::note
You don't need to recreate the environment everytime, you can just activate it in step 1
:::

```bash
login $ ml load anaconda3
login $ conda create -n ag-jupyter -c conda-forge jupyterlab
```


2. Login to an interactive job

```bash
login $ srun --ntasks-per-node 2 --pty bash
compute-1 $ ml load anaconda3
compute-1 $ source activate ag-jupyter
```

3. Launch Jupyterlab

```bash
compute-1 $ jupyter-lab --no-browser --port 8888
```

4. Open another terminal and login to the compute node with port forwarding.

```bash
login $ ssh sysbio-1 -L 8888:localhost:8888
```

5. Go back to the first terminal and copy the jupyterlab link into your local browser. It should look something like `http://localhost:8888/lab?token=4d08d209468541b333109fc4f957c8b3d1c97bed59072148`

:::info
Alternatively you can paste the url in VS Code to connect to it as well.
:::


### What just happened?

```bash
compute node port 8888 -> login node port 8888 -> local computer port 8888
```

## Handling Other Kernels for Jupyter

[^1]: [Alexander Lab @ WHOI](https://alexanderlabwhoi.github.io/post/2019-03-08_jpn-slurm/)
[^2]: [Yale Center for Research Computering Jupyter docs](https://docs.ycrc.yale.edu/clusters-at-yale/guides/jupyter/)
[^3]: [jejjohnson/research_journal](https://jejjohnson.github.io/research_journal/tutorials/remote_computing/vscode_jlab/)
