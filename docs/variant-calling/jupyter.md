---
id: jupyter
title: Jupyter
description: How to use Jupyter Notebooks
sidebar_label: 'Jupyter'
sidebar_position: 3
---

In the last section we touched on [R Markdown](./documentation#r-markdown),
which was a great introduction to interactive computing in a reproducible way.
Another standard that people love to use for data analysis, are jupyter
notebooks. There are a lot of different ways to interact with Jupyter Notebooks
and some pros and cons to them that we'll address.

# Try it in the Browser

[mybinder](https://jupyter.org/try) allows you to run notebooks in the cloud and
allows you to turn a git repo into a collection of interactive notebooks! Follow
the link and let's test out a few different notebooks they have. Try the Classic
Notebook, JupyterLab and Jupyter with R, in that order preferably.

## Binder

Once you're done getting a feel for Jupyter notebooks let's [add your GitHub
repo to binder](https://mybinder.org/)! Grab the binder badge to stick in your
README as well. For example:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/hxf190002/ag-intro.git/HEAD)

# Using VS Code

1. Open up VS Code and connect to giant.
2. Make sure you have the `Jupyter` extension installed on the remote host.
3. Search for the command `Python: Open Start Page`
4. Click the link to the `sample notebook` and install the jupyter requirements
   when prompted.

When you're down playing around with the tutorial:

1. Create a new notebook in your git repo with the command `Jupyter: Create New Blank Notebook`.
2. Add a code block with `print("Hello")` and a markdown code block.
3. Commit your notebook to your git repo.


## Back to Binder

First, commit your notebook. If VS Code doesn't pick up the notebook `git add
first-notebook.ipynb` is the command. Push the changes up and let's check them
out on
[GitHub](https://github.com/Emiller88/ag-intro/blob/make/first-notebook.ipynb).
Note that GitHub prints it in a pretty way, but let's check out the `Raw`
format. Note how the it's a bunch of data, and not very human readable. You'll
see that this makes diffs difficult to process in the future and is a draw back
of Jupyter Notebooks.

Now that you've added a Jupyter notebook to your repo try opening it in
[binder](https://mybinder.org/). This is a quick and easy way to share notebooks
with collaborators.

# Further Reading

- You can also use Google's flavor of Jupyter notebooks at [Google
  Collab](https://colab.research.google.com/notebooks/intro.ipynb)
