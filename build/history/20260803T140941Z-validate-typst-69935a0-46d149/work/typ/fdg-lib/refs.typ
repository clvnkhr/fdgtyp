#let fdg-page-ref(target) = ref(target, supplement: "page", form: "page")

#let fdg-ref(target) = ref(target)

#let fdg-ref-page(target, page-target: auto) = {
  let page-target = if page-target == auto { target } else { page-target }
  [#fdg-ref(target)#text(", ")#fdg-page-ref(page-target)]
}

// Typst numeric bibliography styles number entries by first citation.
// Seed the published reference order invisibly so generated citations match the book.
#let fdg-reference-order = (
  <abelson1996sicp>,
  <abelson1980turtle>,
  <bishop1968tensor>,
  <carroll2003spacetime>,
  <church1941calculi>,
  <flanders1963forms>,
  <frankel1997geometry>,
  <galilei1623assayer>,
  <hawking1973large>,
  <ieee1991scheme>,
  <misner1973gravitation>,
  <pais1982subtle>,
  <papert1980mindstorms>,
  <schutz1985first>,
  <singer1967topology>,
  <spivak1970comprehensive>,
  <spivak1965calculus>,
  <sussman2002role>,
  <sussman2001sicm>,
  <wald1984general>,
  <fdg-software>,
)

#let fdg-seed-bibliography-order() = box(width: 0pt, height: 0pt)[
  #hide[
    #for key in fdg-reference-order {
      cite(key)
      [ ]
    }
  ]
]
