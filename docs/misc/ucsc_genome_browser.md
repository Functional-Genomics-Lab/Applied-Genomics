---
id: ucsc
title: UCSC Genome Browser
description: ''
sidebar_label: 'UCSC Genome Browser'
sidebar_position: 1
---

## Basics

[UCSC Genome Browser Basics. Part 1: Getting around in the Browser](https://www.youtube.com/watch?v=NBDMNv2KFik)

Not going to be covered in depth but still a good reference

- [UCSC Genome Browser Basics, Part 2: Configuring the Browser](https://www.youtube.com/watch?v=cYys5iXN0NY)
- [UCSC Genome Browser Basics. Part 3: Configuration + DNA navigation](https://www.youtube.com/watch?v=I25Q136d6NU)

## Track Hubs

### Hub Connect

[Hub Connect Link](https://genome.ucsc.edu/cgi-bin/hgHubConnect?redirect=manual&source=genome-euro.ucsc.edu)
[Example Hub repo](https://github.com/mhalushka/UCSC_miRNA_barchart)

### WIP: Creating a Track Hub


We're going to connect to our own track hub as a GitHub repo using the [nf-core
chipseq full test
results](https://nf-co.re/chipseq/results#chipseq/results-048fd6854fcc85b355c61dfc2e21da0bcc6399ea/bwa/mergedLibrary/bigwig/).

[Track Hub help documentation](http://genome-euro.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Hosting)

#### Steps to Reproduce

[The Secrets Of Custom Tracks](https://www.youtube.com/watch?v=UvHihNbyCh8)

1. Download the Test data
2. Move it to a new directory
   `~/Downloads/*.bigWig ~/chip-seq-data-hub`
3. Initialize the git repo
   `git init`
4. [Setup git lfs](https://git-lfs.github.com/)
5. Track the bigWig files `git lfs track "*.bigWig"`
6. Commit the changes `git add .` and commit
7. Push the changes up.
8. Create a file name `hub.txt`

```txt title="hub.txt"
```
