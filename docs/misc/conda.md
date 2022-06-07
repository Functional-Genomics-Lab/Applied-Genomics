---
id: conda
title: Conda
description: 'User space package management'
sidebar_label: 'Conda'
sidebar_position: 2
---

So now that we've gotten familiar with some tools it's time to get some
computations running! But we don't have admin access to the system we're on so
how do we install software? Enter conda

# Install Conda and Setup bioconda

[Detailed Guide](https://bioconda.github.io/user/install.html#install-conda)

Summary

```bash
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh
# Follow the prompts

conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge

conda create -n aligners bwa
```

## Extending Our Project

### Create an env file

Let's create an environment file to share with our collaborators, so they can
rebuild our conda environment from scratch.[^1]

```bash
cd ag-intro
conda env export --no-builds > env.yaml
```

Open up `env.yaml` and poke around.

Commit the `env.yaml` file.

### Update the README

Our collaborators need to know how to build the enviroment from scratch. In the
README update the "Getting Started" commands to

```diff title="README.md"
git clone https://github.com/emiller88/ag-intro
cd ag-intro
+ conda env create --name=more-map-and-call --file=env.yaml
+ conda activate aligners
make
```

Commit the changes to the README.

### Add a new make rule to build the conda environment

We can refactor our project to make the initial setup even cleaner, and future proof it if we wanted to change the way we install the conda env.

Let's add a new make rule

```diff title="Makefile"
+ conda_env:
+   conda env create --name=more-map-and-call --file=env.yaml
```

And update the "Getting Started" commands.

```diff title="README.md"
git clone https://github.com/emiller88/ag-intro
cd ag-intro
+ make conda_env
- conda env create --name=more-map-and-call --file=env.yaml
conda activate aligners
make
```

Commit the changes to those as well.

# Further Reading

- [Bioconda Common Pitfalls](https://bioconda.github.io/tutorials/gcb2020.html#common-pitfalls)

[^1]: [Conda environments – common commands](https://bioconda.github.io/tutorials/gcb2020.html#id1)
