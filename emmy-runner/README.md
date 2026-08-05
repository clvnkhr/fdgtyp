# FDG Emmy runner

The runner is a static ClojureScript application. Its deployable files are
written to `public/`.

## Local development

From the repository root:

```sh
make emmy-convert
cd emmy-runner
npm ci
npm run dev
```

The npm development and release commands copy the latest successful files from
`build/current/emmy-generated` into `public/generated/`.
Normal successful Make promotion already synchronizes this directory; the npm
copy is a defensive refresh for direct runner commands.
The root `emmy-runner/` remains the deployment location. Inside an isolated build
workspace they use that workspace's newly generated files instead.

Then open <http://localhost:8080/>.

The runner includes a Clojure-aware CodeMirror editor with syntax highlighting,
structural editing, bracket matching, and completion (`Ctrl-Space`). The
inspector shows live SCI namespaces and public vars. Put the cursor on a symbol
or hover over it to see its runtime category, runtime type, collection/object
shape, function argument lists, documentation, and a bounded value preview.
For definitions in the current `fdg.session`, the source form (bounded to keep
the worker responsive) is also shown, which makes user-defined functions and
objects distinguishable from similar-looking Emmy values. Definitions entered
directly in the editor are discovered when the code is evaluated, so they
receive the same source view.
Pending `declare` Vars are hidden from the namespace list by default and can be
revealed with the **Show pending declarations** toggle. The namespace panel is
pinned to the bottom of the inspector and lists the current `fdg.session` vars.
The vars list takes only the space left below the symbol detail and scrolls
internally if that detail grows. Emmy and compatibility namespaces remain
available through hover and completion.

The selected chapter and codeblock are remembered in browser local storage and
restored on the next refresh. If a saved block is no longer in the manifest,
the runner falls back to the first block in the saved chapter, then the first
block overall.

For the optimized build used by GitHub Pages:

```sh
cd emmy-runner
npm run build
```

## GitHub Pages

The `Deploy Emmy runner to GitHub Pages` workflow builds and deploys the runner
after each push to `master`. It can also be run manually from the Actions tab.
The workflow copies the captured Emmy blocks from the committed successful
`build/current` and packages them with the runner. It does not regenerate or
recapture examples during deployment, because conversion alone would discard
captured output comments.

The optimized JavaScript runner is cached using a key derived from its
ClojureScript sources and dependency files. Book-only changes reuse that exact
bundle and skip the Java, Clojure, npm, and Shadow-CLJS build steps. Changes to
the runner or its dependencies automatically produce a cache miss and a fresh
release build.

Before the first deployment, open **Settings → Pages → Build and deployment**
in the GitHub repository and set **Source** to **GitHub Actions**.

For this repository, the deployed project-page URL will be:

<https://clvnkhr.github.io/fdgtyp/>
