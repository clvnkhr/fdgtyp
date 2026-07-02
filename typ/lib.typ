#import "@preview/iridis:0.1.0"

#let curl = math.op("curl")
#let grad = math.op("grad")
#let Lap = math.op("Lap")
#let div = math.op("div")
#let length = math.op("length")
#let fdg-equation-prefix = state("fdg-equation-prefix", "0")
#let fdg-link-color = rgb("#245f86")
#let fdg-raw-fill = rgb("#fffdf8")
#let fdg-raw-stroke = rgb("#eadfcf")
#let fdg-raw-text = rgb("#27211d")
#let fdg-iridis-palette = (
  rgb("#7d00e5"),
  rgb("#ff0000"),
  rgb("#0094ff"),
  rgb("#ff6a00"),
  rgb("#4f8f55"),
  rgb("#0041ff"),
  rgb("#c8a900"),
)

#let fdg-appendix-label(target) = if target == <chap-appendix-a> {
  "A"
} else if target == <chap-appendix-b> {
  "B"
} else if target == <chap-appendix-c> {
  "C"
} else {
  none
}

#let fdg-ref-suffix(suffix) = if suffix == "" {
  none
} else {
  [#h(-0.25em)#suffix]
}

#let fdg-page-ref(target, suffix: "") = context {
  let loc = query(target).first().location()
  [#link(loc)[#("page " + str(counter(page).at(loc).first()))]#fdg-ref-suffix(suffix)]
}

#let fdg-ref(target, suffix: "") = context {
  let appendix = fdg-appendix-label(target)
  if appendix == none {
    [#ref(target)#fdg-ref-suffix(suffix)]
  } else {
    [#link(query(target).first().location())[#appendix]#fdg-ref-suffix(suffix)]
  }
}

#let fdg-ref-page(target, page-target: auto, suffix: "") = {
  let page-target = if page-target == auto { target } else { page-target }
  [#fdg-ref(target, suffix: ",") #fdg-page-ref(page-target, suffix: suffix)]
}

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
  set ref(supplement: none)
  set raw(
    syntaxes: "Scheme.sublime-syntax",
    theme: "fdg-scheme.tmTheme",
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
    let appendix = fdg-appendix-label(it.target)
    if appendix == none {
      text(fill: fdg-link-color, it)
    } else if it.element == none {
      text(fill: fdg-link-color, appendix)
    } else {
      link(it.element.location(), text(fill: fdg-link-color, appendix))
    }
  }
  show raw.where(block: true): it => {
    block(
      fill: fdg-raw-fill,
      stroke: fdg-raw-stroke,
      inset: 8pt,
      radius: 3pt,
      width: 100%,
      {
        show: iridis.iridis-show.with(palette: fdg-iridis-palette)
        text(font: "JetBrains Mono", size: 8.35pt, fill: fdg-raw-text, it)
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

#let fdg-chapter(title, body, numbered: true, eq-prefix: none, ref-label: "") = {
  pagebreak(weak: true)
  counter(math.equation).update(0)
  if eq-prefix != none {
    fdg-equation-prefix.update(eq-prefix)
  }
  let label-heading(it) = {
    if ref-label == "" {
      it
    } else {
      [#it #label(ref-label)]
    }
  }
  if numbered {
    label-heading(heading(level: 1, title))
    body
  } else {
    label-heading(heading(level: 1, numbering: none, title))
    {
      set heading(numbering: none)
      body
    }
  }
}
