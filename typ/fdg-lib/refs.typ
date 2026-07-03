#let fdg-page-ref(target) = ref(target, supplement: "page", form: "page")

#let fdg-ref(target) = ref(target)

#let fdg-ref-page(target, page-target: auto) = {
  let page-target = if page-target == auto { target } else { page-target }
  [#fdg-ref(target)#text(", ")#fdg-page-ref(page-target)]
}
