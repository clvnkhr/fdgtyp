# Functional Differential Geometry in Typst

This repository produces a Typst edition of *Functional Differential Geometry*
in Scheme, ClojureScript/Emmy, and combined-code editions. It also contains an
interactive Emmy runner for the book examples.

For the complete technical architecture, data-flow diagrams, artifact ownership
rules, component catalogue, validation model, and deployment flow, see
[ARCHITECTURE.md](ARCHITECTURE.md).

## Workflow stages

The build is split into reusable stages. Public Make targets copy only the
required source and configuration inputs into a fresh staging workspace. On
success, a compacted diagnostic workspace is stored at
`build/history/current/`, while `build/current` points only to its published
artifacts. Retained runner inputs are relative links to the root
`emmy-runner/`; volatile Shadow/Clojure caches and bundles are discarded. The
source checkout is therefore never changed by a build. The three latest
successful builds are retained in static slots: `current/`,
`previous-1.tar.gz`, and `previous-2.tar.gz`. Failed builds use the same slot
names under `build/failed/`. Unique run IDs and timestamps live in `run.json`,
so successive builds modify stable paths that Git can compare directly. Each
archived slot also has a matching `previous-1.json` or `previous-2.json`, making
its timestamps and status readable without extracting the archive.

| Need | Command | Writes |
| --- | --- | --- |
| Regenerate Typst from vendored Org | `make raw` | New run workspace |
| Regenerate Scheme/Emmy blocks and manifest | `make emmy-convert` | New run workspace |
| Run existing Emmy examples without recapturing results | `make smoke-emmy` | New run workspace |
| Refresh captured Emmy outputs | `make capture-emmy` | New run workspace |
| Check current Emmy state | `make emmy-check` | New run workspace |
| Regenerate and validate Emmy state | `make emmy-refresh` | New run workspace |
| Validate generated Typst | `make prepare-typst` | New run workspace |
| Render current final PDFs | `make just-pdf` | New run workspace |
| Render one current final PDF | `make scheme-book-pdf`, `make cljs-book-pdf`, or `make both-book-pdf` | New run workspace |
| Run a complete fresh build | `make` | New run workspace |
| Watch the browser runner | `make runner-dev` | New run workspace |
| Build the optimized runner | `make runner-build` | New run workspace |

Run `make help` for the compact command reference.

`make` retains the full-build behavior: regenerate Typst, refresh Emmy blocks
and captured results, validate, and render draft and final PDFs for all three
editions. It requires an unmodified pinned upstream Org snapshot.

Every invocation prints its artifact directory and writes
`build/current/run.json` with the target, source revision, timestamps, and
final status. Combined stdout/stderr and per-recipe elapsed times are retained
in `build/current/build.log`. To choose a readable identifier, use
`make <target> FDG_RUN_ID=my-run`. A failed build is moved to `build/failed/`
and leaves the previous `build/current` intact. `build/current` is a symlink to
`build/history/current/artifacts`; its private `work/`
snapshot remains in that history entry for diagnostics. Older successful and
failed runs can be inspected by extracting `previous-1.tar.gz` or
`previous-2.tar.gz` from `build/history/` or `build/failed/`.

## Source flow

```text
source checkout: fdg-book/scheme/org
  -> scripts/convert-org-to-typst.mjs
  -> build/current/typ/content
  -> scripts/convert-scheme-to-emmy.mjs
  -> build/current/codeblocks + build/current/emmy-generated
  -> Typst PDFs and the interactive runner
```

The vendored Org source is checksum-protected. Put source-fidelity repairs in
the Org-to-Typst converter; make durable Emmy fixes in the Scheme-to-Emmy
converter or, for reusable API differences, `emmy-runner/src/fdg/compat.cljs`.
The root `codeblocks/` and `emmy-runner/public/generated/` trees are disposable
generated mirrors, not authoritative edit locations.
