#let curl = math.op("curl")
#let grad = math.op("grad")
#let Lap = math.op("Lap")
#let div = math.op("div")
#let length = math.op("length")
#let fdg-equation-prefix = state("fdg-equation-prefix", "0")

#let fdg-book(body) = {
  set document(
    title: "Functional Differential Geometry",
    author: ("Gerald Jay Sussman", "Jack Wisdom"),
  )
  set page(
    paper: "us-letter",
    margin: (x: 0.82in, y: 0.78in),
    numbering: "1",
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
  )
  set heading(numbering: "1.1")
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
  show raw.where(block: true): it => {
    block(
      fill: rgb("#f7f7f5"),
      stroke: rgb("#d8d8d2"),
      inset: 8pt,
      radius: 3pt,
      width: 100%,
      text(font: "JetBrains Mono", size: 8.4pt, it),
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

#let fdg-title-page() = {
  align(center)[
    #v(18%)
    #text(size: 25pt, weight: "semibold")[Functional Differential Geometry]

    #v(1.2em)
    #text(size: 13pt)[Gerald Jay Sussman and Jack Wisdom]

    #v(2em)
    #text(size: 9pt, fill: rgb("#555"))[
      Generated from the Scheme Org sources in `fdg-book/scheme/org`.
    ]
  ]
  pagebreak()
}

#let fdg-chapter(title, body, numbered: true, eq-prefix: none) = {
  pagebreak(weak: true)
  counter(math.equation).update(0)
  if eq-prefix != none {
    fdg-equation-prefix.update(eq-prefix)
  }
  if numbered {
    heading(level: 1, title)
    body
  } else {
    heading(level: 1, numbering: none, title)
    {
      set heading(numbering: none)
      body
    }
  }
}
