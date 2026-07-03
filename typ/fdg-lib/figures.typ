#import "basics.typ": fdg-equation-prefix, fdg-figure-counter

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
