#import "@preview/iridis:0.1.0"
#import "@preview/metalogo:1.2.0": LaTeX, TeX
#import "@preview/cetz:0.5.2"
#import "@preview/hydra:0.6.3": hydra

#let curl = math.op("curl")
#let grad = math.op("grad")
#let Lap = math.op("Lap")
#let div = math.op("div")
#let length = math.op("length")
#let fdg-equation-prefix = state("fdg-equation-prefix", "0")
#let fdg-figure-counter = counter("fdg-figure")
#let fdg-link-color = rgb("#245f86")
#let fdg-raw-fill = rgb("#fffdf8")
#let fdg-raw-stroke = rgb("#eadfcf")
#let fdg-raw-text = rgb("#27211d")
#let fdg-draft-mode = sys.inputs.at("draft", default: "false") == "true"
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

#let fdg-figure(body, caption) = {
  fdg-figure-counter.step()
  let number = context {
    fdg-equation-prefix.at(here()) + "." + str(fdg-figure-counter.get().first())
  }
  figure(
    body,
    numbering: none,
    caption: [#strong[Figure #number:] #caption],
  )
}

#let fdg-cover-vortex(x, y, rx, ry, hot-side: "bottom") = {
  import cetz.draw: *

  let layers = (
    (1.00, 0.00, rgb("#252830")),
    (0.88, -0.02, rgb("#302143")),
    (0.76, -0.04, rgb("#38115d")),
    (0.64, -0.07, rgb("#3331a0")),
    (0.52, -0.10, rgb("#747fc8")),
    (0.39, -0.14, rgb("#d31683")),
    (0.29, -0.22, rgb("#dc241e")),
    (0.20, -0.31, rgb("#ff9c1c")),
    (0.14, -0.38, rgb("#ffe600")),
  )
  for (scale, y-shift, color) in layers {
    floating(circle((x, y + y-shift * ry), radius: (rx * scale, ry * scale), fill: color, stroke: none))
  }
}

#let fdg-cover-art() = {
  cetz.canvas(length: 1in, {
    import cetz.draw: *

    rect((0, 0), (8.5, 7.15), fill: rgb("#031314"), stroke: none)

    fdg-cover-vortex(3.1, 6.00, 3.95, 1.34)
    fdg-cover-vortex(8.15, 1.40, 3.35, 1.45)

    floating(bezier(
      (-0.25, 0.80),
      (4.35, 4.85),
      (1.35, 2.20),
      (3.6, 4.50),
      stroke: (paint: rgb("#7bd65b"), thickness: 2.7pt),
      fill: none,
    ))
    floating(bezier(
      (1.38, 7.25),
      (4.35, 4.85),
      (3.35, 6.50),
      (5.2, 5.25),
      stroke: (paint: rgb("#7bd65b"), thickness: 2.35pt),
      fill: none,
    ))
    floating(bezier(
      (1.22, 7.25),
      (8.72, 0.72),
      (6.45, 5.75),
      (6.42, 1.95),
      stroke: (paint: rgb("#7bd65b"), thickness: 2.7pt),
      fill: none,
    ))
  })
}

#let fdg-cover-page() = {
  box(width: 8.5in, height: 11in)[
    #stack(
      dir: ttb,
      spacing: 0pt,
      fdg-cover-art(),
      block(width: 8.5in, height: 0.08in, fill: white),
      block(width: 8.5in, height: 3.77in, fill: rgb("#e1e9e7"))[
        #pad(left: 1.03in, top: 0.43in, right: 0.35in)[
          #text(font: "Helvetica Neue", size: 31pt, tracking: 4pt, fill: rgb("#06171c"))[
            FUNCTIONAL DIFFERENTIAL \
            GEOMETRY
          ]
        ]
        #v(0.38in)
        #line(length: 100%, stroke: (paint: rgb("#606563"), thickness: 1.1pt, dash: "densely-dotted"))
        #pad(left: 1.05in, top: 0.18in)[
          #text(font: "Helvetica Neue", size: 21pt, fill: rgb("#244a9d"))[
            Gerald Jay Sussman and Jack Wisdom
          ]

          #v(0.20in)
          #text(font: "Helvetica Neue", size: 16pt, fill: rgb("#244a9d"))[
            with Will Farr
          ]
        ]
      ],
    )
  ]
}

#let fdg-title-page() = {
  set page(numbering: none)
  if fdg-draft-mode {
    align(center)[
      #v(32%)
      #text(size: 25pt, weight: "semibold")[Functional Differential Geometry]

      #v(1.2em)
      #text(size: 12pt, fill: rgb("#777"))[Draft mode]
    ]
    pagebreak()
  } else {
    page(margin: 0pt, header: none, footer: none)[
      #fdg-cover-page()
    ]
  }

  align(center)[
    #v(18%)
    #text(size: 25pt, weight: "semibold")[Functional Differential Geometry]

    #v(2em)
    #text(size: 13pt)[Gerald Jay Sussman and Jack Wisdom]

    #v(0.5em)
    #text(size: 11pt)[with Will Farr]

    #v(3em)
    The MIT Press \
    Cambridge, Massachusetts \
    London, England
  ]
  pagebreak()

  [
    #sym.copyright 2013 Massachusetts Institute of Technology

    This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this license, visit creativecommons.org.

    Other than as provided by this license, no part of this book may be reproduced, transmitted, or displayed by any electronic or mechanical means without permission from the MIT Press or as permitted by law.

    MIT Press books may be purchased at special quantity discounts for business or sales promotional use. For information, please email special\_sales\@mitpress.mit.edu or write to Special Sales Department, The MIT Press, 55 Hayward Street, Cambridge, MA 02142.

    This book was set in Computer Modern by the authors with the #LaTeX typesetting system and was printed and bound in the United States of America.

    #v(1em)
    Library of Congress Cataloging-in-Publication Data

    Sussman, Gerald Jay. \
    Functional Differential Geometry / Gerald Jay Sussman and Jack Wisdom; with Will Farr. \
    p. cm. \
    Includes bibliographical references and index. \
    ISBN 978-0-262-01934-7 (hardcover : alk. paper) \
    1. Geometry, Differential. 2. Functional Differential Equations. \
    3. Mathematical Physics. \
    I. Wisdom, Jack. II. Farr, Will. III. Title. \
    QC20.7.D52S87 2013 \
    516.3'6--dc23

    2012042107

    #v(1em)
    10 9 8 7 6 5 4 3 2 1
  ]
  pagebreak()

  quote(block: true)[
    The author has spared himself no pains in his endeavour to present the main ideas in the simplest and most intelligible form, and on the whole, in the sequence and connection in which they actually originated. In the interest of clearness, it appeared to me inevitable that I should repeat myself frequently, without paying the slightest attention to the elegance of the presentation. I adhered scrupulously to the precept of that brilliant theoretical physicist L. Boltzmann, according to whom matters of elegance ought be left to the tailor and to the cobbler.

    Albert Einstein, in Relativity, the Special and General Theory, (1961), p. v
  ]
  pagebreak()
}

#let fdg-chapter(title, body, numbered: true, eq-prefix: none, ref-label: "") = {
  pagebreak(weak: true)
  if numbered or title not in ("Preface", "Prologue") {
    set page(numbering: "1")
  }
  if ref-label == "chap-1" {
    counter(page).update(1)
  }
  counter(math.equation).update(0)
  fdg-figure-counter.update(0)
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
