---
id: make
title: Build Systems
description: How to use make
sidebar_label: 'Build Systems'
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
