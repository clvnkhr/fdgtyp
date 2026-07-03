#import "basics.typ": fdg-equation-prefix, fdg-figure-counter

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
