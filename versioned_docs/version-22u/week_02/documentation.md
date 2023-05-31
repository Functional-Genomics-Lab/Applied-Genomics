---
id: documentation
title: Documentation
description: How to use markdown
sidebar_label: 'Documentation'
sidebar_position: 4
---

# Documentation

<!-- https://www.writethedocs.org/videos/eu/2017/the-four-kinds-of-documentation-and-why-you-need-to-understand-what-they-are-daniele-procida/ -->

Markdown is a simple markup language for formatting elements using only _plaintext_.

There's a few advantages to it over WYSIWYG(What You See Is What You Get)
editors such as microsoft word.

- Simple formatting. Spend time writing instead of fighting margins.
- No vendor lock in. If the program you're using to display it disappears you
  still have your writing.
- Easy to version control.

Here are a few places to learn and reference:

- [Interactive markdown tutorial](https://www.markdowntutorial.com/lesson/1/)
- [Markdown Guide](https://www.markdownguide.org/getting-started/)
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)

But the best way to learn it is to just use it!

## Updating the README

In the [git section](./git) we created a README. We've updated our project
though and now we need to add how to use our project.

```markdown
# ag-intro

This will be the second commit
This will be the third commit

## Requirements:

- gnumake

## Getting Started

    git clone https://github.com/Applied-Genomics-UTD/reproducible-research-<your-github-username>.git
    reproducible-research-<your-github-username>
    make
```

Let's open a preview of the README in VS Code. Search for the command `Markdown: Open Preview to the Side`. This is helpful to have up while you're writing to see what the output will be while you get used to the syntax.

### Merging a Branch

:::info
This is a callback to [git](./git) in case you skipped over that section!
:::

[Git Merge](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwac-cdn.atlassian.com%2Fdam%2Fjcr%3A83323200-3c57-4c29-9b7e-e67e98745427%2FBranch-1.png%3FcdnVersion%3Djw&f=1&nofb=1)

1. Checkout the `main` or `master` branch.
   - `Git: Checkout to...` is the VS Code command(`CTRL+Shift+P`)
2. Search for the command `Git: Merge Branch...`
3. When prompted type in `make`
4. Search for the command `git log` (You'll need the Git History extension)

# Further Reading

- [Manubot](https://manubot.org/)
- [Make a README](https://www.makeareadme.com/)
