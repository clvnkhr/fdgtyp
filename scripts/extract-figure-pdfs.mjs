#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePdf = path.join(root, "fdg-book", "fdg_book.pdf");
const outDir = path.join(root, "typ", "assets", "figures");
const tmpDir = path.join(root, "typ", "assets", ".figure-work");

const figures = [
  { file: "fig-2-1.pdf", page: 34, trim: "60pt 350pt 35pt 45pt" },
  { file: "fig-2-2.pdf", page: 36, trim: "60pt 380pt 35pt 45pt" },
  { file: "fig-2-3.pdf", page: 40, trim: "60pt 330pt 35pt 45pt" },
  { file: "fig-4-1.pdf", page: 63, trim: "60pt 260pt 35pt 45pt" },
  { file: "fig-4-2.pdf", page: 74, trim: "60pt 310pt 35pt 45pt" },
  { file: "fig-5-1.pdf", page: 80, trim: "60pt 370pt 35pt 45pt" },
  { file: "fig-6-1.pdf", page: 93, trim: "60pt 360pt 35pt 45pt" },
  { file: "fig-7-1.pdf", page: 125, trim: "60pt 305pt 35pt 30pt" },
];

mkdirSync(outDir, { recursive: true });
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

for (const figure of figures) {
  const clipped = path.join(tmpDir, figure.file);
  const output = path.join(outDir, figure.file);

  execFileSync(
    "pdfjam",
    [
      sourcePdf,
      String(figure.page),
      "--outfile",
      clipped,
      "--trim",
      figure.trim,
      "--clip",
      "true",
    ],
    { stdio: "inherit" },
  );

  execFileSync("pdfcrop", [clipped, output], { stdio: "inherit" });
}

rmSync(tmpDir, { recursive: true, force: true });
console.log(`Extracted ${figures.length} cropped figure PDFs into ${path.relative(root, outDir)}.`);
