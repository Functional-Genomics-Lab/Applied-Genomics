---
id: code_alternatives
title: VS Code Alternatives
description: ''
sidebar_label: 'VS Code Alternatives'
sidebar_position: 1
---

Due to changes in some of the UT Dallas systems, we're going to cover some extra
methods to login just in case. [Refer to Environment setup](../week-1) for
alternatives.

Windows:

- [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab#)
- [git for Windows](https://gitforwindows.org/)
- [MobaXTerm and VS Code Setup](https://www.youtube.com/watch?v=GmMsTc55gLI)

MacOS:

- [iTerm2](https://iterm2.com/)

Once installed, open up a terminal, and try logging in.

:::danger
When typing in your password, there won't be any \*'s it will just be blank. This is normal.
:::

```bash
ssh <netid>@sysbio.utdallas.edu
```

## Create SSH Keys

While we're at it let's generate ssh keys so we don't have to type in our
password everytime, and use it with our git repos as well. Public key based
authentication is most secure and has advantages over other methods as well.

[GitHub Docs for generating a new SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

First, add the public key to your GitHub. Then copy it to the remote machine with

### Windows

```bash
scp C:\Users\username\.ssh\id_ed25519.pub <netid>@sysbio.utdallas.edu:~/.ssh/authorized_keys
```

### MacOS

```bash
scp ~/.ssh/id_ed25519.pub <netid>@sysbio.utdallas.edu:~/.ssh/authorized_keys
```
