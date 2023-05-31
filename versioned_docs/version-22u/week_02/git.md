---
id: git
title: Version Control Systems
description: How to use git
sidebar_label: 'Version Control Systems'
sidebar_position: 2
---

# Version Control Systems

## Why is git important for scientists?

| Research Stage               | Record Keeping                                               |
| ---------------------------- | ------------------------------------------------------------ |
| Data Collection & Experiment | Record parameters and changes in lab notebook(paper/digital) |
| Data processing & Analysis   | ?                                                            |

:::tip
Version control of code == lab notebook of experiment
:::

[^1]

## Intro to Git

### So what is Git?

Modern VCSs also let you easily (and often automatically) answer questions like[^2]:

    - Who wrote this code?
    - When was this particular line of this particular file edited? By whom? Why was it edited?
    - Over the last 1000 revisions, when/why did this break? (And who broke it?)

![git.png](https://imgs.xkcd.com/comics/git.png)

In case you get lost check out [Further Reading](#further-reading)

### VS Code Workflow

:::caution
Make sure you have installed `Git Lens` on remote machine.
:::

#### Set Your Identity

In the integrated terminal put the following, but replace it with your name and email.

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

#### First Commit

Now we're going to make our first change, stage that change, and then commit it.

1. Open the file called `README.md`.

```md title="README.md"
# ag-intro
```

2. Select the git graph icon on the left bar(It should have a blue 1)
3. Click on the + button next to `README.md`.

Our change has now been staged! We need to commit it to the git repo

4. Type a message into the "Message" box ("Add README" would be a great message)
5. Hit `Ctrl+Enter`

That was the first commit!

#### Second commit

1. `Ctrl+p` and select `README.md`.
   - This is a handy way to jump between files in VS Code
2. Change the file to have

```md title="README.md"
# ag-intro

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

:::warning
This may not work on Sysbio becasue the git version is too old.
:::

1. In the Source Control window, open the "COMMITS" drawer. You should see

![VS Code Commits](/img/week_02/vs_code_commits.png)

2. You can click though the "FILE HISTORY" and view old versions of the file

### So what's a remote?

> As you probably know, git is a distributed version control system. Most operations are done locally. To communicate with the outside world, git uses what are called remotes. These are repositories other than the one on your local disk which you can push your changes into (so that other people can see them) or pull from (so that you can get others changes). The command git remote add origin git@github.com:peter/first_app.gitcreates a new remote called origin located at git@github.com:peter/first_app.git. Once you do this, in your push commands, you can push to origin instead of typing out the whole URL.
> [^3]

![GitHub Workflow](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.c-sharpcorner.com%2Farticle%2Fgit-and-github-version-control-local-and-remote-repository%2FImages%2FGit%2520And%2520Github%2520Version%2520Control.png&f=1&nofb=1)

#### Creating a remote

1. [Create a GitHub account](https://github.com/join)
2. On the left hand side you should see Repositories and a green button that
   says New. Click it.
3. Give the repo a name. `ag-intro` is recommended.
4. Copy the code underneath "...or push an existing repository from the command line"
   Should be something similar to:

```bash
git remote add origin https://github.com/<username>/ag-intro.git
git branch -M main
git push -u origin main
```

5. In VS Code hit `Ctrl+Shift+~`, this should open up a terminal in the bottom
   of the screen. Paste the commands in there.
6. Check your GitHub repo and see if the code got pushed!

# Submitting Assignment 1

Let's make the tests pass!

Open up your `~/.bash_history` and copy the commands for each section that you
ran into some shell scripts. They don't have to be perfect!

```
code ~/.bash_history unix-bootcamp.sh dark-arts.sh data-analysis.sh data-compression.sh
```

You should see the GitHub classroom tests pass in your extension as well. These
are just simple tests that are checking for the correct file.

## Further Reading

- [Missing Semester Version Control lecture](https://missing.csail.mit.edu/2020/version-control/)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Resources to learn Git](https://try.github.io/)

[^1]: 04-git_workshop of HPC
[^2]: [Missing Semester Version Control lecture](https://missing.csail.mit.edu/2020/version-control/)
[^3]: [A stackoverflow answer explaining the concept of remotes.](https://stackoverflow.com/questions/5617211/what-is-git-remote-add-and-git-push-origin-master/5617350#5617350)
