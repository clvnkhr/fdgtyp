#import "@preview/metalogo:1.2.0": LaTeX, TeX

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
#let fdg-draft-mode = sys.inputs.at("draft", default: "true") == "true"
#let fdg-iridis-palette = (
  rgb("#7d00e5"),
  rgb("#ff0000"),
  rgb("#0094ff"),
  rgb("#ff6a00"),
  rgb("#4f8f55"),
  rgb("#0041ff"),
  rgb("#c8a900"),
)
