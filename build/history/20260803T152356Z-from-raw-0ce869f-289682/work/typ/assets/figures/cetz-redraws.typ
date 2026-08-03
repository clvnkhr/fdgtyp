#import "@preview/cetz:0.5.2"

#set page(width: 7in, height: 7.4in, margin: 0.45in, numbering: none)
#set text(font: "New Computer Modern", size: 10pt)

#let ink = rgb("#202020")
#let pale = rgb("#777777")
#let thin = (paint: ink, thickness: 0.8pt)
#let heavy = (paint: ink, thickness: 1.15pt)
#let dotted = (paint: pale, thickness: 0.7pt, dash: "dotted")
#let dashed = (paint: pale, thickness: 0.7pt, dash: "dashed")
#let arrow-mark = (end: "straight")

// Shared Euclidean geometry. Keeping construction coordinates relational
// makes the diagrams easy to resize and prevents dependent points drifting.
#let p-add(a, b) = (a.at(0) + b.at(0), a.at(1) + b.at(1))
#let p-sub(a, b) = (a.at(0) - b.at(0), a.at(1) - b.at(1))
#let p-scale(k, p) = (k * p.at(0), k * p.at(1))
#let p-lerp(a, b, t: 0.5) = p-add(a, p-scale(t, p-sub(b, a)))
#let p-dot(a, b) = a.at(0) * b.at(0) + a.at(1) * b.at(1)
#let p-norm(p) = calc.sqrt(p-dot(p, p))
#let p-with-length(p, length) = p-scale(length / p-norm(p), p)
#let polar(r, angle) = (r * calc.cos(angle), r * calc.sin(angle))
#let line-intersection(a, u, b, v) = {
  let cross(p, q) = p.at(0) * q.at(1) - p.at(1) * q.at(0)
  p-add(a, p-scale(cross(p-sub(b, a), v) / cross(u, v), u))
}

#let review-page(number, title, reference, diagram) = {
  align(center, text(size: 13pt, weight: "semibold")[Figure #number: #title])
  v(0.25in)
  grid(
    columns: (1fr, 1fr),
    column-gutter: 0.28in,
    align: (center + top),
    [
      #align(center, text(size: 9pt, weight: "semibold")[Original PDF])
      #v(0.12in)
      #align(center, image(reference, width: 100%, fit: "contain"))
    ],
    [
      #align(center, text(size: 9pt, weight: "semibold")[CeTZ redraw])
      #v(0.12in)
      #align(center, scale(62%, reflow: true, diagram))
    ],
  )
  pagebreak(weak: true)
}

#let fig-2-1 = cetz.canvas(length: 0.62in, {
  import cetz.draw: *

  let m = (1.75, 1.45)
  let chi-m = (1.45, 5.15)
  let chip-m = (5.2, 4.45)
  let transition-start = (5.0, 4.8)
  let transition-end = (1.75, 5.45)

  // The manifold and its overlapping coordinate patches.
  hobby(
    (1.0, 0.5),
    (0.55, 1.2),
    (0.7, 2.5),
    (2.8, 2.65),
    (3.4, 1.25),
    (3.0, 0.5),
    close: true,
    stroke: heavy,
    fill: none,
  )
  hobby(
    (1.15, 0.95),
    (0.8, 1.45),
    (1.2, 2.0),
    (2.25, 2.15),
    (2.75, 1.45),
    (2.4, 0.85),
    close: true,
    stroke: thin,
    fill: none,
  )
  hobby(
    (1.35, 0.7),
    (1.0, 1.05),
    (1.35, 2.25),
    (2.65, 2.35),
    (3.05, 1.55),
    (2.75, 1.05),
    close: true,
    stroke: thin,
    fill: none,
  )
  content((2.7, 0.62), [$M$], anchor: "center")
  circle(m, radius: 0.07, fill: ink, stroke: none)
  content(p-add(m, (-0.1, -0.27)), [$m$], anchor: "east")

  // Coordinate spaces.
  hobby(
    (0.35, 5.1),
    (0.0, 5.8),
    (0.5, 6.85),
    (2.2, 6.9),
    (3.05, 5.9),
    (2.7, 5.0),
    close: true,
    stroke: heavy,
    fill: none,
  )
  hobby(
    (4.15, 4.15),
    (3.8, 5.05),
    (4.4, 6.0),
    (6.0, 5.95),
    (6.65, 4.95),
    (6.35, 4.2),
    close: true,
    stroke: heavy,
    fill: none,
  )
  content((1.25, 5.8), [$RR^n$], anchor: "center")
  content((5.25, 5.05), [$RR^n$], anchor: "center")

  line(m, chi-m, stroke: heavy, mark: arrow-mark)
  line(m, chip-m, stroke: heavy, mark: arrow-mark)
  line(transition-start, transition-end, stroke: heavy, mark: arrow-mark)
  content(p-add(p-lerp(m, chi-m), (0.1, 0.02)), box(inset: 2pt)[$chi$], anchor: "west")
  content(p-add(p-lerp(m, chip-m), (0.24, 0)), box(inset: 2pt)[$chi'$], anchor: "north")
  content(
    p-add(p-lerp(transition-start, transition-end), (0.08, 0.14)),
    box(inset: 2pt)[$chi compose chi'^(-1)$],
    anchor: "south",
  )

  // Small coordinate grids.
  let lattice(origin, u, v, count: 6) = {
    for i in range(count) {
      // Interior coordinate lines only: no accidental rectangular frame.
      let t = (i + 1) / (count + 1)
      line(p-add(origin, p-scale(t, u)), p-add(p-add(origin, p-scale(t, u)), v), stroke: thin)
      line(p-add(origin, p-scale(t, v)), p-add(p-add(origin, p-scale(t, v)), u), stroke: thin)
    }
  }
  lattice((-0.05, 3.25), (1.48, 0), (0.17, 1.22))
  // Both basis vectors are oblique, so the right grid is genuinely sheared.
  lattice((4.0, 2.68), (2.22, -0.11), (0.7, 0.95))
})

#let fig-2-2 = cetz.canvas(length: 0.66in, {
  import cetz.draw: *
  let m = (1.55, 1.5)
  let chi-m = (1.5, 5.2)
  let fm = (5.25, 3.0)
  let f-end = p-add(fm, (-0.2, -0.1))
  let fchi-start = (1.65, 5.45)
  let fchi-end = p-add(fm, (-0.2, 0.25))
  hobby(
    (0.6, 0.4),
    (0.1, 1.25),
    (0.8, 3.0),
    (2.55, 2.85),
    (3.25, 1.4),
    (2.8, 0.5),
    close: true,
    stroke: heavy,
    fill: none,
  )
  hobby(
    (0.95, 1.0),
    (0.75, 1.45),
    (1.1, 2.15),
    (2.1, 2.3),
    (2.6, 1.5),
    (2.25, 0.9),
    close: true,
    stroke: thin,
    fill: none,
  )
  content((2.38, 0.72), [$M$], anchor: "center")
  circle(m, radius: 0.07, fill: ink, stroke: none)
  content(p-add(m, (-0.21, -0.27)), [$m$], anchor: "east")

  hobby(
    (0.45, 5.0),
    (0.1, 5.8),
    (0.6, 6.8),
    (2.35, 6.85),
    (3.15, 5.8),
    (2.75, 4.95),
    close: true,
    stroke: heavy,
    fill: none,
  )
  content((1.3, 5.8), [$RR^n$])
  line(m, chi-m, stroke: heavy, mark: arrow-mark)
  content(p-add(p-lerp(m, chi-m), (0.15, 0.05)), box(inset: 2pt)[$chi$], anchor: "west")

  hobby(
    (4.25, 2.15),
    (3.8, 3.0),
    (4.35, 4.2),
    (6.2, 4.25),
    (6.95, 3.15),
    (6.65, 2.2),
    close: true,
    stroke: heavy,
    fill: none,
  )
  circle(fm, radius: 0.07, fill: ink, stroke: none)
  content(p-add(fm, (0.15, 0)), [$f(m)$], anchor: "west")
  line(m, f-end, stroke: heavy, mark: arrow-mark)
  line(fchi-start, fchi-end, stroke: heavy, mark: arrow-mark)
  content(p-add(p-lerp(m, f-end), (0, -0.18)), box(inset: 2pt)[$f$], anchor: "south")
  content(p-add(p-lerp(fchi-start, fchi-end), (0, 0.2)), box(inset: 2pt)[$f_chi$], anchor: "south")

  let grid-origin = (-0.45, 3.32)
  let grid-u = (1.62, 0)
  let grid-v = (0.2, 1.26)
  for i in range(6) {
    let t = (i + 1) / 7
    line(p-add(grid-origin, p-scale(t, grid-u)), p-add(p-add(grid-origin, p-scale(t, grid-u)), grid-v), stroke: thin)
    line(p-add(grid-origin, p-scale(t, grid-v)), p-add(p-add(grid-origin, p-scale(t, grid-v)), grid-u), stroke: thin)
  }
})

#let fig-2-3 = cetz.canvas(length: 0.72in, {
  import cetz.draw: *

  // Exact stereographic coordinates for a generic point P on the unit sphere:
  //   P = (cos(phi) cos(lambda), cos(phi) sin(lambda), sin(phi)), N = (0, 0, 1).
  // The line N + t(P-N) meets z = 0 when t = 1/(1-sin(phi)), hence
  //   Q = (rho cos(lambda), rho sin(lambda), 0),
  //   rho = cos(phi)/(1-sin(phi)) = tan(45deg + phi/2), theta = lambda.
  let phi = 22deg
  let lambda = -34deg
  let radius = 1.58
  let center = (3.2, 2.25)
  let view-elevation = 20deg
  let view-azimuth = -16deg

  // Orthographic view of (x,y,z). Its screen axes are orthonormal, so the
  // sphere has a circular silhouette and z=0 appears as an inclined plane.
  let project(p) = (
    center.at(0) + radius * (-calc.sin(view-azimuth) * p.at(0) + calc.cos(view-azimuth) * p.at(1)),
    center.at(1)
      + radius
        * (
          -calc.sin(view-elevation) * calc.cos(view-azimuth) * p.at(0)
            - calc.sin(view-elevation) * calc.sin(view-azimuth) * p.at(1)
            + calc.cos(view-elevation) * p.at(2)
        ),
  )
  let sphere-point(phi, lambda) = (
    calc.cos(phi) * calc.cos(lambda),
    calc.cos(phi) * calc.sin(lambda),
    calc.sin(phi),
  )
  let north = (0, 0, 1)
  let p = sphere-point(phi, lambda)
  let rho = calc.cos(phi) / (1 - calc.sin(phi))
  let q = (rho * calc.cos(lambda), rho * calc.sin(lambda), 0)
  let n2 = project(north)
  let p2 = project(p)
  let q2 = project(q)
  let o2 = project((0, 0, 0))

  // The equatorial plane, computed from four 3D corners.
  // Keep every projected corner outside the sphere. In particular, this
  // ensures that the front edge itself supplies both lower intersections.
  let plane-x = 2.5
  let plane-y = 1.8
  let plane = (
    project((-plane-x, -plane-y, 0)),
    project((plane-x, -plane-y, 0)),
    project((plane-x, plane-y, 0)),
    project((-plane-x, plane-y, 0)),
  )

  let line-circle-crossings(a, b) = {
    let d = p-sub(b, a)
    let f = p-sub(a, center)
    let aa = p-dot(d, d)
    let bb = 2 * p-dot(f, d)
    let cc = p-dot(f, f) - radius * radius
    let discriminant = bb * bb - 4 * aa * cc
    if discriminant <= 0 { return () }
    let root = calc.sqrt(discriminant)
    let t0 = (-bb - root) / (2 * aa)
    let t1 = (-bb + root) / (2 * aa)
    let valid = ()
    if t0 >= 0 and t0 <= 1 { valid.push(p-add(a, p-scale(t0, d))) }
    if t1 >= 0 and t1 <= 1 { valid.push(p-add(a, p-scale(t1, d))) }
    valid
  }
  let draw-plane-edge(a, b, occluded: true) = {
    if not occluded {
      line(a, b, stroke: thin)
      return
    }
    let crossings = line-circle-crossings(a, b)
    if crossings.len() == 0 {
      line(a, b, stroke: thin)
      return
    }
    if crossings.len() == 1 {
      let crossing = crossings.first()
      let a-is-hidden = p-dot(p-sub(a, center), p-sub(a, center)) < radius * radius
      line(a, crossing, stroke: if a-is-hidden { dotted } else { thin })
      line(crossing, b, stroke: if a-is-hidden { thin } else { dotted })
      return
    }
    // Outside the projected sphere the edge is visible; inside it the upper
    // hemisphere occludes the plane, so retain it only as a dotted edge.
    line(a, crossings.at(0), stroke: thin)
    line(crossings.at(0), crossings.at(1), stroke: dotted)
    line(crossings.at(1), b, stroke: thin)
  }

  // Clear the sphere's footprint, then draw each plane edge with its exact
  // occluded interval dotted rather than simply deleting that interval.
  circle(center, radius: radius, stroke: none)
  for i in range(4) {
    // Edge 1 is the near/front edge of z=0 and therefore covers the lower
    // hemisphere. The remaining edges pass behind the upper hemisphere.
    draw-plane-edge(
      plane.at(i),
      plane.at(calc.rem(i + 1, 4)),
      occluded: i != 1,
    )
  }

  // Exact circular silhouette. The lower half is hidden/cropped by the plane.
  let left = (center.at(0) - radius, center.at(1))
  let right = (center.at(0) + radius, center.at(1))
  arc(right, start: 0deg, stop: 180deg, radius: radius, stroke: heavy)

  // The finite plane covers only part of the lower silhouette. Intersect its
  // front edge with the sphere and make the protruding bottom arc solid.
  let lower-angle(p) = {
    // Typst's atan2 takes (x, y), unlike the common programming-language
    // convention atan2(y, x).
    let angle = calc.atan2(p.at(0) - center.at(0), p.at(1) - center.at(1))
    if angle < 0deg { angle + 360deg } else { angle }
  }
  let lower-crossings = line-circle-crossings(plane.at(1), plane.at(2))
  let angle-a = lower-angle(lower-crossings.at(0))
  let angle-b = lower-angle(lower-crossings.at(1))
  let exposed-start = calc.min(angle-a, angle-b)
  let exposed-stop = calc.max(angle-a, angle-b)
  arc(left, start: 180deg, stop: exposed-start, radius: radius, stroke: dotted)
  arc(
    (center.at(0) + radius * calc.cos(exposed-start), center.at(1) + radius * calc.sin(exposed-start)),
    start: exposed-start,
    stop: exposed-stop,
    radius: radius,
    stroke: heavy,
  )
  arc(
    (center.at(0) + radius * calc.cos(exposed-stop), center.at(1) + radius * calc.sin(exposed-stop)),
    start: exposed-stop,
    stop: 360deg,
    radius: radius,
    stroke: dotted,
  )

  // Exact projected equator: an ellipse with vertical semiaxis R sin(alpha).
  let equator-radius = (radius, radius * calc.sin(view-elevation))
  arc(left, start: 180deg, stop: 360deg, radius: equator-radius, stroke: thin)
  arc(right, start: 0deg, stop: 180deg, radius: equator-radius, stroke: dashed)

  // N, P, Q and the single straight stereographic ray. The segment inside
  // the sphere is dotted; the segment outside it is solid.
  line(n2, p2, stroke: dotted)
  line(p2, q2, stroke: thin)
  for point in (n2, p2, q2, o2) {
    circle(point, radius: 0.055, fill: ink, stroke: none)
  }
  content((n2.at(0), n2.at(1) + 0.18), [$N$], anchor: "south")
  content((p2.at(0) - 0.12, p2.at(1) + 0.12), [$(#sym.phi, #sym.lambda)$], anchor: "east")
  content((q2.at(0) + 0.16, q2.at(1) + 0.05), [$(#sym.rho, theta)$], anchor: "west")
})

#let fig-4-1 = cetz.canvas(length: 0.65in, {
  import cetz.draw: *
  let family-count = 7
  let vertical-start = (0.8, 0.45)
  let vertical-step = (0.75, 0)
  let vertical-direction = (0.4, 5.25)
  let horizontal-start = (0.35, 0.7)
  let horizontal-step = (0, 0.72)
  let horizontal-direction = (5.65, -0.45)
  // Put m exactly at a leaf intersection, not merely near one.
  let chosen-vertical = p-add(vertical-start, p-scale(2, vertical-step))
  let chosen-horizontal = p-add(horizontal-start, p-scale(2, horizontal-step))
  let m = line-intersection(chosen-vertical, vertical-direction, chosen-horizontal, horizontal-direction)
  // Dual foliations: dotted vertical family and dashed horizontal family.
  for i in range(family-count) {
    let vertical-base = p-add(vertical-start, p-scale(i, vertical-step))
    let horizontal-base = p-add(horizontal-start, p-scale(i, horizontal-step))
    line(vertical-base, p-add(vertical-base, vertical-direction), stroke: dotted)
    line(horizontal-base, p-add(horizontal-base, horizontal-direction), stroke: dashed)
  }
  // Each basis vector is exactly tangent to its corresponding foliation.
  let e0 = p-with-length(horizontal-direction, 2.62)
  let e1 = p-with-length(vertical-direction, 1.97)
  let e0-end = p-add(m, e0)
  let e1-end = p-add(m, e1)
  circle(m, radius: 0.06, fill: ink, stroke: none)
  line(m, e0-end, stroke: heavy, mark: arrow-mark)
  line(m, e1-end, stroke: heavy, mark: arrow-mark)
  content(p-add(e0-end, (-0.07, -0.26)), [$e_0$], anchor: "north")
  content(p-add(e1-end, (-0.21, 0.06)), [$e_1$], anchor: "east")
})

#let fig-4-2 = cetz.canvas(length: 0.72in, {
  import cetz.draw: *
  let p0 = (3.0, 5.75)
  // Successive flow increments. The last small increment is the second-order
  // commutator displacement that closes the loop.
  let flow-steps = (
    (-2.25, -2.2), // epsilon v
    (1.3, -3.0), // epsilon w
    (2.6, 1.7), // -epsilon v after transport
    (-0.27, 3.17), // -epsilon w after transport
  )
  let p1 = p-add(p0, flow-steps.at(0))
  let p2 = p-add(p1, flow-steps.at(1))
  let p3 = p-add(p2, flow-steps.at(2))
  let p4 = p-add(p3, flow-steps.at(3))
  let loop-points = (p0, p1, p2, p3, p4, p0)
  circle(p0, radius: 0.06, fill: ink, stroke: none)
  content(p-add(p0, (-0.2, 0.2)), [$m$], anchor: "east")
  for i in range(5) {
    line(loop-points.at(i), loop-points.at(i + 1), stroke: heavy, mark: arrow-mark)
  }
  let label-offsets = ((-0.23, 0.0), (-0.22, 0), (0, -0.22), (0.18, 0), (0, 0.23))
  let labels = ([$epsilon v$], [$epsilon w$], [$-epsilon v$], [$-epsilon w$], [$epsilon^2 [v,w]$])
  for i in range(5) {
    content(
      p-add(p-lerp(loop-points.at(i), loop-points.at(i + 1)), label-offsets.at(i)),
      labels.at(i),
      anchor: "center",
    )
  }
})

#let fig-5-1 = cetz.canvas(length: 0.78in, {
  import cetz.draw: *
  let m = (0.65, 0.7)
  let u-vector = (2.6, 3.75)
  let v-vector = (4.15, 0.75)
  let u-end = p-add(m, u-vector)
  let v-end = p-add(m, v-vector)
  let uv-end = p-add(m, p-add(u-vector, v-vector))
  line(m, u-end, stroke: heavy, mark: arrow-mark)
  line(m, v-end, stroke: heavy, mark: arrow-mark)
  line(u-end, uv-end, stroke: thin)
  line(v-end, uv-end, stroke: thin)
  circle(m, radius: 0.055, fill: ink, stroke: none)
  content(p-add(m, (-0.15, -0.22)), [$m$], anchor: "east")
  content(p-add(p-lerp(m, u-end), (0, 0.12)), [$u(m)$], anchor: "east")
  content(p-add(p-lerp(m, v-end), (0.15, -0.12)), [$v(m)$], anchor: "north")
  content(p-add(p-lerp(m, uv-end), (0.15, 0.2)), [$A(u,v)(m)$], anchor: "center")
})

#let fig-6-1 = cetz.canvas(length: 0.66in, {
  import cetz.draw: *
  let source-start = (0.4, 0.4)
  let source-end = (1.6, 3.05)
  // Leave a deliberate gap: mu is a map from N, not a vector based on N.
  let map-start = p-add(p-lerp(source-start, source-end, t: 0.5), (0.28, 0))
  let map-end = (4.45, map-start.at(1))
  // Source manifold N and map mu.
  line(source-start, source-end, stroke: heavy)
  content(p-add(source-start, (0.3, 0.15)), [$N$], anchor: "west")
  line(map-start, map-end, stroke: heavy, mark: arrow-mark)
  content(p-add(p-lerp(map-start, map-end), (0, 0.2)), [$mu$], anchor: "south")

  // Target manifold M and the image mu(N).
  hobby(
    (4.5, 0.25),
    (3.9, 1.3),
    (4.35, 4.7),
    (6.9, 4.85),
    (7.8, 2.1),
    (7.35, 0.35),
    close: true,
    stroke: heavy,
    fill: none,
  )
  bezier((5.25, 0.9), (5.25, 3.65), (4.75, 1.65), (4.75, 3.0), stroke: heavy, fill: none)
  content((6.6, 0.55), [$M$])
  content((5.4, 1.0), [$mu(N)$], anchor: "west")

  // Field v; sample the restricted field along mu(N), varying direction and
  // magnitude smoothly with the sample parameter.
  let restricted-base = (5.03, 1.08)
  let restricted-count = 8
  for i in range(restricted-count) {
    let t = i / (restricted-count - 1)
    let start = p-add(restricted-base, (0.04 * calc.pow(2 * t - 1, 2), 1.99 * t))
    let vector = polar(
      0.62 + 0.18 * calc.sin(180deg * t) + 0.04 * calc.sin(720deg * t),
      -5deg + 22deg * t + 4deg * calc.sin(540deg * t),
    )
    line(start, p-add(start, vector), stroke: thin, mark: arrow-mark)
  }

  // Ambient samples occupy separate upper, right, and lower bands, leaving a
  // clear corridor around the solid restricted field. Their small variations
  // retain a natural look without the previous excessive rotation.
  let ambient-bands = (
    // Left of mu(N), safely separated from the solid restricted arrows.
    ((4.42, 0.82), (0, 0.82), 4, 12deg),
    // Upper interior of M.
    ((5.2, 4.18), (0.46, 0), 4, 18deg),
    ((5.45, 3.72), (0.35, 0), 5, 18deg),
    ((6.0, 1.22), (0.35, 0), 3, -4deg),
    ((6.0, 1.92), (0.35, 0), 3, 2deg),
    ((6.0, 2.62), (0.35, 0), 3, 7deg),
    ((5.52, 0.9), (0.3, 0), 5, -12deg),
  )
  for band-index in range(ambient-bands.len()) {
    let band = ambient-bands.at(band-index)
    let origin = band.at(0)
    let step = band.at(1)
    let count = band.at(2)
    let base-angle = band.at(3)
    for i in range(count) {
      let jitter = (
        0.05 * calc.sin((2 * i + band-index) * 61deg),
        0.09 * calc.sin((i + 2 * band-index) * 70deg),
      )
      let start = p-add(origin, p-add(p-scale(i, step), jitter))
      let vector = polar(
        0.44 + 0.06 * calc.sin((2 * i + band-index) * 55deg),
        base-angle + 5deg * calc.sin((3 * i + band-index) * 47deg),
      )
      line(start, p-add(start, vector), stroke: dotted, mark: arrow-mark)
    }
  }
})

#let fig-7-1 = cetz.canvas(length: 0.7in, {
  import cetz.draw: *
  let center = (3.25, 2.8)
  let outer-radius = 2.55
  // The source inner circle is about 78% of the outer radius.
  let inner-radius = 2.0
  // Circular integral curves.
  circle(center, radius: outer-radius, stroke: heavy, fill: none)
  circle(center, radius: inner-radius, stroke: thin, fill: none)
  // Coordinate basis at the centre.
  let basis-length = 0.8
  let x-end = p-add(center, (basis-length, 0))
  let y-end = p-add(center, (0, basis-length))
  line(center, x-end, stroke: heavy, mark: arrow-mark)
  line(center, y-end, stroke: heavy, mark: arrow-mark)
  content(p-add(x-end, (0, -0.22)), [$partial slash partial x$], anchor: "north")
  content(p-add(y-end, (-0.2, -0.05)), [$partial slash partial y$], anchor: "east")

  // v, its transported copy, v', and their difference.
  // The vectors have distinct base points. Choose a shared height, then solve
  // x^2 + h^2 = r^2 on each circle so the transport is horizontal.
  let base-height = outer-radius * calc.sin(34deg)
  let inner-base = p-add(center, (calc.sqrt(inner-radius * inner-radius - base-height * base-height), base-height))
  let outer-base = p-add(center, (calc.sqrt(outer-radius * outer-radius - base-height * base-height), base-height))
  let v = (-1.43, 1.42)
  let vp = (-1.39, 2.05)
  let v-end = p-add(inner-base, v)
  let vp-end = p-add(outer-base, vp)
  // Translate v horizontally to the x-coordinate of v'; the remaining
  // vertical segment is exactly Delta v in the source construction.
  let t-end = (vp-end.at(0), v-end.at(1))
  line(inner-base, outer-base, stroke: dotted, mark: arrow-mark)
  line(inner-base, v-end, stroke: heavy, mark: arrow-mark)
  line(outer-base, vp-end, stroke: heavy, mark: arrow-mark)
  line(v-end, t-end, stroke: dotted, mark: arrow-mark)
  line(t-end, vp-end, stroke: heavy, mark: arrow-mark)
  content(p-add(p-lerp(inner-base, v-end), (-0.12, 0.05)), [$v$], anchor: "east")
  content(p-add(p-lerp(outer-base, vp-end), (0.14, 0.04)), [$v'$], anchor: "west")
  content(p-add(p-lerp(t-end, vp-end), (-0.12, 0)), [$Delta v$], anchor: "east")
  line(outer-base, t-end, stroke: dashed)
})

#review-page("2.1", [Overlapping coordinate patches], "fig-2-1.pdf", fig-2-1)
#review-page("2.2", [A manifold function in coordinates], "fig-2-2.pdf", fig-2-2)
#review-page("2.3", [Riemann coordinates on the sphere], "fig-2-3.pdf", fig-2-3)
#review-page("4.1", [A basis and its dual foliations], "fig-4-1.pdf", fig-4-1)
#review-page("4.2", [The commutator loop], "fig-4-2.pdf", fig-4-2)
#review-page("5.1", [Oriented area], "fig-5-1.pdf", fig-5-1)
#review-page("6.1", [A vector field over a map], "fig-6-1.pdf", fig-6-1)
#review-page("7.1", [Parallel transport in a circular field], "fig-7-1.pdf", fig-7-1)
