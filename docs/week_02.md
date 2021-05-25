---
id: week-2
title: Reproducible Research
description: Reproducible Research
sidebar_label: 'Week 2'
sidebar_position: 2
---

**This section is meant to introduce some topics, and where to find information,
but not be a comprehensive overview itself.**

# What we're going to avoid

!["final".doc](http://phdcomics.com/comics/archive/phd101212s.gif)

# Version Control Systems

## Why is git important for scientists?

| Research Stage               | Record Keeping                                               |
| ---------------------------- | ------------------------------------------------------------ |
| Data Collection & Experiment | Record parameters and changes in lab notebook(paper/digital) |
| Data processing & Analysis   | ?                                                            |

```
Version control of code == lab notebook of experiment
```

[^1]

## Intro to Git

### So what is Git?

Modern VCSs also let you easily (and often automatically) answer questions like[^2]:

    - Who wrote this code?
    - When was this particular line of this particular file edited? By whom? Why was it edited?
    - Over the last 1000 revisions, when/why did this break? (And who broke it?)

![git.png](https://imgs.xkcd.com/comics/git.png)

In case you get lost:

- [Missing Semester Version Control lecture](https://missing.csail.mit.edu/2020/version-control/)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Resources to learn Git](https://try.github.io/)

### VS Code Workflow

#### Creating a repo

First we're going to initialize a git repository. This is just a
folder/directory that has it's changes tracked by git.

1. Open up VS Code, make sure you have the [functional genomics extension pack](https://marketplace.visualstudio.com/items?itemName=FunctionalGenomics.functional-genomics) installed
2. `CTRL+Shift+p`
3. Type in and select `Git: Initialize Repository`.
4. Choose a folder. (name it `ag-git-intro`)
5. Click the Open/Open in new window popup in the bottom right corner

#### First Commit

Now we're going to make our first change, stage that change, and then commit it.

1. Create a new file called `README.md`.
2. Add to the first line `# ag-git-intro` and save.
3. Select the git graph icon on the left bar(It should have a blue 1)
4. Click on the + button next to `README.md`.

Our change has now been staged! We need to commit it to the git repo

5. Type a message into the "Message" box ("Add README" would be a great message)
6. Hit `Ctrl+Enter`

That was the first commit!

#### Second commit

1. `Ctrl+p` and select `README.md`.
   - This is a handy way to jump between files in VS Code
2. Change the file to have

```md
# ag-git-intro

This is a mistake!
This will be the second commit
This will be the third commit
```

3. Select the git graph icon on the left bar(It should have a blue 1)
4. Click on the + button next to `README.md`.

This time we staged some changes we didn't mean to. We need to remove those and
break our commits up into logical sections, rather than commit everything at
once.

4. Click on the - button next to `README.md` under Staged Changes.

That just unstaged what we staged before we commited it.

5. Click on `README.md` and this will pull up a **diff**, which is the
   difference between what's committed to the repo, and the working copy.
6. Highlight the 3 and 4 lines, right click and select "Stage Selected Ranges"
7. We want to get rid of the mistake we staged, so click on `README.md` under
   "Staged Changes", highlight line 2("This is a mistake!"), right click and
   select "Unstage Selected Ranges".

Now we want to commit our changes:

8. Type a message into the "Message" box ("Update README" would be a great message)
9. Hit `Ctrl+Enter`

Now for practice, commit only the line that has "This will be the third commit"

#### Viewing changes

1. In the Source Control window, open the "COMMITS" drawer. You should see

![VS Code Commits](/img/week_02/vs_code_commits.png)

2. You can click though the "FILE HISTORY" and view old versions of the file

# Documentation

# Assignment 2

1. Create a fork of the course material
2. Clone that repo locally
3. Open up `docs/index.md`
4. Add your name and semester to the Alumni table
5. Create a PR to the main repo

::: details Check out
[First-contributions](https://github.com/firstcontributions/first-contributions)
or [First contributions with
VS-code](https://github.com/firstcontributions/first-contributions/blob/master/gui-tool-tutorials/github-windows-vs-code-tutorial.md)
for ideas.
:::

[^1]: 04-git_workshop of HPC
[^2]: [Missing Semester Version Control lecture](https://missing.csail.mit.edu/2020/version-control/)
