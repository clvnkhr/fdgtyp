#import "fdg-lib/basics.typ": *
#import "fdg-lib/refs.typ": *
#import "fdg-lib/layout.typ": *
#import "fdg-lib/figures.typ": *
#import "fdg-lib/cover.typ": *
#import "fdg-lib/title.typ": *
#import "fdg-lib/chapter.typ": *
#import "assets/figures/cetz-redraws.typ": fig-2-1, fig-2-2, fig-2-3, fig-4-1, fig-4-2, fig-5-1, fig-6-1, fig-7-1

#let fdg-cetz-figures = (
  "fig-2-1": (figure: fig-2-1, scale: 78%),
  "fig-2-2": (figure: fig-2-2, scale: 73%),
  "fig-2-3": (figure: fig-2-3, scale: 58%),
  "fig-4-1": (figure: fig-4-1, scale: 86%),
  "fig-4-2": (figure: fig-4-2, scale: 82%),
  "fig-5-1": (figure: fig-5-1, scale: 58%),
  "fig-6-1": (figure: fig-6-1, scale: 65%),
  "fig-7-1": (figure: fig-7-1, scale: 78%),
)

#let fdg-cetz-figure(name) = {
  let entry = fdg-cetz-figures.at(name)
  scale(entry.scale, reflow: true, entry.figure)
}
