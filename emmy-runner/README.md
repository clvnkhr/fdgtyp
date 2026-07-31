# FDG Emmy runner

The runner is a static ClojureScript application. Its deployable files are
written to `public/`.

## Local development

From the repository root:

```sh
node scripts/convert-scheme-to-emmy.mjs
cd emmy-runner
npm ci
npm run dev
```

Then open <http://localhost:8080/>.

For the optimized build used by GitHub Pages:

```sh
cd emmy-runner
npm run build
```

## GitHub Pages

The `Deploy Emmy runner to GitHub Pages` workflow builds and deploys the runner
after each push to `master`. It can also be run manually from the Actions tab.
The workflow uses the checked-in files under `public/generated/`; it does not
regenerate or recapture the book's Emmy blocks during deployment.

The optimized JavaScript runner is cached using a key derived from its
ClojureScript sources and dependency files. Book-only changes reuse that exact
bundle and skip the Java, Clojure, npm, and Shadow-CLJS build steps. Changes to
the runner or its dependencies automatically produce a cache miss and a fresh
release build.

Before the first deployment, open **Settings → Pages → Build and deployment**
in the GitHub repository and set **Source** to **GitHub Actions**.

For this repository, the deployed project-page URL will be:

<https://clvnkhr.github.io/fdgtyp/>
