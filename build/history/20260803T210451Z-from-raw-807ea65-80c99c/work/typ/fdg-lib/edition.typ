// Shared display text for edition-specific title treatments.
#let fdg-edition-subtitle(code-edition) = {
  if code-edition == "scheme" {
    none
  } else if code-edition == "clojure" {
    [merely in ClojureScript]
  } else if code-edition == "both" {
    [merely in ClojureScript and Scheme]
  } else {
    panic("unknown FDG code edition: " + repr(code-edition))
  }
}
