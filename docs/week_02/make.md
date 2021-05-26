---
id: make
title: Make
description: How to use make
sidebar_label: 'Make'
sidebar_position: 2
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

`make` is a utility that allows you to declare _rules_ to create the
files(_targets_) that you need.

Here's the rough format:

```makefile
target ... : prerequisites ...
        command
        ...
        ...
```

Here's a few example rules:

```makefile title="Makefile"
# A rule - this rule will only run if file0.txt doesn't exist.
file0.txt:
	echo "foo" > file0.txt
	# Even comments in these 'recipe' sections get passed to the shell.
	# Try `make file0.txt` or simply `make` - first rule is the default.

# This rule will only run if file0.txt is newer than file1.txt.
file1.txt: file0.txt
	cat file0.txt > file1.txt
	# use the same quoting rules as in the shell.
	@cat file0.txt >> file1.txt
	# @ stops the command from being echoed to stdout.
	-@echo 'hello'
	# - means that make will keep going in the case of an error.
	# Try `make file1.txt` on the commandline.

# A rule can have multiple targets and multiple prerequisites
file2.txt file3.txt: file0.txt file1.txt
	touch file2.txt
	touch file3.txt

# A phony target. Any target that isn't a file.
# It will never be up to date so make will always try to run it.
clean:
	rm file*.txt
```

[^1]

Let's throw this in a Makefile and play around with it.

:::warning
Makefiles use tabs and not spaces
:::

1. Try running `make`
2. Try running `make file1.txt`
3. Try running `make clean`
4. Try running `make file2.txt`

### How does it work?

- `make` works by reading a Makefilewhich describes:

  - Files to be created
  - Their dependencies
  - Instructions to create the specified files

- Makefiles describe a DAG of the dependencies

  - Directed Acyclic Graph
  - circular dependencies are dealt with by dropping the most recently
    discovered dependency and forging ahead (more later)

- `make` then works its way (using post-order traversal) up the dependency
  graph building files until the goal file is up-to-date

  - Only creates outputs whose dependencies are newer than the goal file itself

[^2]

### Let's commit the changes!

But first, we have a bunch of _build artifacts_ in our directory. These
shouldn't be added to the git repo, because they aren't code(A source of truth),
they're something the code creates(A _side effect_).

You might notice that git picked up all of the txt files. A special file called
`.gitignore` will tell git to ignore them and avoid tracking their history. Create it and throw the following the file

```gitignore title=".gitignore"
file*.txt
```

Now let's commit it. Same thing as before, refer to [The git first commit
section](./git#first-commit) if you need a refresher

# Further reading

[^1]: [Learn X in Y minutes where X=make](https://learnxinyminutes.com/docs/make/)
[^2]: UTD HPC Course Lecture 08
