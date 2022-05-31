---
id: make
title: Make
description: How to use make
sidebar_label: 'Make'
sidebar_position: 5
---

# Build Systems

Codebases for scientific projects are usually on the smaller end of the
spectrum. They also usually have small development teams. Because they have
small teams they have a low [bus
factor](https://www.wikipedia.org/wiki/Bus_factor) and that cause codebases to
fall away quickly when core members move on.

So to solve this problem you could write down a bunch of shell commands used to
install or run your code. Or you could just use [GNU Make](https://www.gnu.org/software/make/)

## Intro to Make

See `The Art of Bioinformatics Scripting` Chapter 2 (Pages **59-73**)

### Let's commit the changes!

#### Creating a branch

First, let's learn to make a branch. Here's a visual representation of branches

![Git branches](https://wac-cdn.atlassian.com/dam/jcr:746be214-eb99-462c-9319-04a4d2eeebfa/01.svg?cdnVersion=1629)

> A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project. [^3]

There are a few ways to create a branch using VS Code. Let's use `Ctrl+Shift+P` and search for `Git: Create Branch from`. Then use the name `make` and then select `head` or `master`.

1. `Ctrl+Shift+P`
2. Search for `Git: Create Branch from`.
3. Use `make` for the name of the branch.
4. Create the branch from `master`.

#### .gitignore

But we have a bunch of _build artifacts_ in our directory. These
shouldn't be added to the git repo, because they aren't code(A source of truth),
they're something the code creates(A _side effect_).

You might notice that git picked up all of the txt files. A special file called
`.gitignore` will tell git to ignore them and avoid tracking their history. Create it and throw the following the file

```gitignore title=".gitignore"
reads/
refs/
vcf/
*.bam
```

#### Commit

Now let's commit it. Same thing as before, refer to [The git first commit
section](./git#first-commit) if you need a refresher!

# Further reading

- [Dev Hints Makefile cheatsheet](https://devhints.io/makefile)

[^1]: [Learn X in Y minutes where X=make](https://learnxinyminutes.com/docs/make/)
[^3]: [Atlassian Git Branch Tutorial](https://www.atlassian.com/git/tutorials/using-branches)
