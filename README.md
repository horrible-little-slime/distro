# distro

distribute slime tube loot for altend

# Development

First turn your TypeScript files into something KoLmafia can understand by running

```bash
 run build
```

Then you can automatically create symlinks to your built files by running

```bash
 run install-mafia
```

When you're developing you can have your files automatically rebuild by keeping

```bash
 run dev
```

running in the background. If you've already built symlinks, your up-to-date script can be run instantly by entering `distro` into the KoLmafia CLI.