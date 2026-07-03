#import "@preview/iridis:0.1.0"
#import "@preview/hydra:0.6.3": hydra
#import "basics.typ": fdg-equation-prefix, fdg-iridis-palette, fdg-link-color, fdg-raw-fill, fdg-raw-stroke, fdg-raw-text

#let fdg-running-header = context {
  let page-numbering = here().page-numbering()
  if page-numbering == none {
    none
  } else {
    let page-number = numbering(page-numbering, counter(page).get().first())
    let page = if page-numbering == "i" {
      text(size: 9pt, style: "italic")[#page-number]
    } else {
      text(size: 9pt)[#page-number]
    }
    let title = text(size: 9pt, style: "italic")[#hydra(1)]
    let header = if calc.odd(here().page()) {
      [#title #h(1fr) #page]
    } else {
      [#page #h(1fr) #title]
    }
    [#header #v(-0.9em) #line(length: 100%, stroke: 0.35pt)]
  }
}

#let fdg-book(body) = {
  set document(
    title: "Functional Differential Geometry",
    author: ("Gerald Jay Sussman", "Jack Wisdom", "Will Farr"),
  )
  set page(
    paper: "us-letter",
    margin: (x: 0.82in, y: 0.78in),
    numbering: "1",
    header: fdg-running-header,
    footer: none,
    // fill: black,
  )
  set text(
    font: "New Computer Modern",
    size: 10.3pt,
    lang: "en",
    // fill: white,
  )
  set par(
    justify: true,
    leading: 0.58em,
    justification-limits: (
      tracking: (min: -0.01em, max: 0.02em),
    ),
  )
  set heading(numbering: "1.1")
  set ref(supplement: none)
  set raw(
    syntaxes: "../Scheme.sublime-syntax",
    theme: "../fdg-scheme.tmTheme",
    tab-size: 2,
  )
  set math.equation(numbering: it => {
    "(" + fdg-equation-prefix.at(here()) + "." + str(it) + ")"
  })
  show math.equation: it => {
    if it.block and not it.has("label") and it.numbering != none [
      #counter(math.equation).update(v => v - 1)
      #math.equation(it.body, block: true, numbering: none)
    ] else {
      it
    }
  }
  show heading: it => {
    block(above: 1.1em, below: 0.45em, it)
  }
  show link: it => {
    text(fill: fdg-link-color)[
      #underline(offset: 2pt, stroke: 0.45pt + fdg-link-color, it.body)
    ]
  }
  show ref: it => {
    text(fill: fdg-link-color, it)
  }
  show raw.where(block: true): it => {
    let raw-lang = if it.lang == none { "raw" } else { it.lang }
    block(
      fill: fdg-raw-fill,
      stroke: fdg-raw-stroke,
      inset: 8pt,
      radius: 3pt,
      width: 100%,
      {
        place(
          top + right,
          dx: -1pt,
          dy: 0.7pt,
          text(font: "JetBrains Mono", size: 6.8pt, fill: rgb("#b8b1a5"))[#raw-lang],
        )
        pad(right: 30pt)[
          #show: iridis.iridis-show.with(palette: fdg-iridis-palette)
          #text(font: "JetBrains Mono", size: 8.35pt, fill: fdg-raw-text, it)
        ]
      },
    )
  }
  show raw.where(block: false): it => {
    box(
      fill: fdg-raw-fill,
      stroke: fdg-raw-stroke,
      inset: (x: 2.2pt, y: 0.35pt),
      outset: (y: 1.1pt),
      radius: 1.8pt,
      {
        show: iridis.iridis-show.with(palette: fdg-iridis-palette)
        text(font: "JetBrains Mono", fill: fdg-raw-text, it)
      },
    )
  }
  show quote: it => {
    block(
      inset: (left: 1.1em),
      stroke: (left: 1.2pt + rgb("#6f6f68")),
      text(style: "italic", it),
    )
  }
  body
}
