# fdg-book Provenance

This directory is treated as a hard-copied, vendored source tree inside this repository.

It is not a Git submodule and does not contain its own `.git` directory. Although it was originally brought in with `git subtree`, the files are now ordinary tracked files in this repository and should be considered a fixed source snapshot for the Typst conversion and fidelity audit.

## Import Record

- Vendored path: `fdg-book/`
- Import method used historically: `git subtree`
- Merge commit in this repository: `cfa1f68232280a3e26f9262d2d335ac628cba0cc`
- Squashed subtree commit in this repository: `e1481748be83c493edfe54271d2068577aef1e2d`
- Recorded upstream split commit: `9beb69925206541559b3760128d8db9029337812`
- Import date in git history: 2026-07-02

## Upstream Repository URL

The original upstream repository URL is not recorded in the local subtree metadata or git config. If it is later recovered, add it here before doing any upstream refresh.

## Update Policy

Do not run `git subtree pull` or otherwise replace this directory as a moving dependency during audit/fidelity work.

If the upstream source must be refreshed:

1. Record the upstream repository URL and commit.
2. Create an audit snapshot of the current repo state.
3. Import the new upstream source into a temporary comparison location or branch.
4. Diff it against this vendored copy.
5. Apply only deliberate, reviewed changes to `fdg-book/`.
6. Update this provenance file with the new source commit and rationale.

The conversion should remain reproducible from the vendored files in this repository, even if the original upstream source moves or disappears.
