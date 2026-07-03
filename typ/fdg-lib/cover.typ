#import "@preview/cetz:0.5.2"

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
