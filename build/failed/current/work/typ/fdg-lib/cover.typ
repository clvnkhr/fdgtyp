#import "@preview/cetz:0.5.2"
#import "edition.typ": fdg-edition-subtitle

// ---------------------------------------------------------------------------
// HAND-TUNING CONTROLS
// ---------------------------------------------------------------------------
// Each particle has independent position and velocity controls. These values
// exactly expand the previous shared launch:
//   shared (x: -2.4, y: 2.5, vx: 1.3, vy: -1.0), delta-vy: 0.070
#let fdg-cover-tuning = (
  escaped: (
    x: -2.40,
    y: 2.50,
    vx: 0.674,
    vy: -0.36,
  ),
  captured: (
    x: -2.40,
    y: 2.50,
    vx: 1.0,
    vy: -0.4,
  ),

  first-hole: (x: -1.45, y: 0.35, mass: 1.00),
  second-hole: (x: 3.10, y: -4.35, mass: 1.12),
  softening: 0.02, // rounds the otherwise singular potential surface
  capture-radius: 0.18, // captured path stops this far from the second hole
  depth-cap: 2.20, // smooth potential depth limit; used by art and physics

  // Complete hand-tunable color sets. Surface stops are
  //   (positive depth below zero, (red, green, blue)).
  // Keep stops ordered from shallow to deep; colors interpolate linearly.
  scheme-colors: (
    surface-gradient: (
      (0.42, (18, 27, 37)),
      (0.58, (34, 43, 85)),
      (0.76, (51, 78, 154)),
      (0.98, (112, 79, 194)),
      (1.25, (200, 36, 135)),
      (1.48, (228, 59, 50)),
      (1.72, (255, 157, 40)),
      (2.05, (255, 227, 90)),
    ),
    art-background: rgb("#031314"),
    path-understroke: rgb("#08241e"),
    escaped-path: rgb("#82df58"),
    captured-path: rgb("#a0ef69").rotate(3rad),
    title-panel: rgb("#e1e9e7"),
    title-ink: rgb("#06171c"),
    accent: rgb("#244a9d"),
    divider: rgb("#606563"),
  ),
  cljs-colors: (
    surface-gradient: (
      (0.42, (7, 25, 24)),
      (0.58, (7, 49, 40)),
      (0.76, (8, 77, 55)),
      (0.98, (12, 112, 68)),
      (1.25, (28, 151, 76)),
      (1.48, (67, 187, 83)),
      (1.72, (137, 216, 102)),
      (2.05, (226, 244, 154)),
    ),
    art-background: rgb("#021411"),
    path-understroke: rgb("#05231c"),
    escaped-path: rgb("#79f2b1"),
    captured-path: rgb("#d5f46f"),
    title-panel: rgb("#e3eee7"),
    title-ink: rgb("#07251d"),
    accent: rgb("#2d7a46"),
    divider: rgb("#668073"),
  ),

  dt: 0.004, // lower = more accurate; change velocities before dt
  steps: 6000,
  sample-every: 10, // lower = smoother paths, larger PDF
  // Hybrid surface mesh: a coarse Cartesian background plus a curvilinear
  // polar O-grid around each hole. radial-power > 1 concentrates rings near
  // the hole while keeping the outer join relatively inexpensive.
  mesh: (x: 100, y: 100),
  polar-mesh: (
    cutoff-radius: 0.2, // omit the hidden center of each well
    outer-radius: 3.0,
    transition-width: 0.45,
    transition-power: 1.0,
    radial-divisions: 70,
    angular-divisions: 40,
    radial-power: 2.0,
  ),

  // 3D camera and framing:
  // x changes elevation/tilt; y turns the view left/right. CeTZ's ortho
  // projection has no angular z argument, so roll rotates the projected
  // composition in the cover plane.
  camera: (x: -60deg, y: 0deg, roll: 0deg),
  view-scale: 1.36,
  view-shift: (4.55, 6.20),
  // These bounds deliberately extend beyond the crop. This keeps the
  // rectangular edge of the sampled surface out of the finished artwork.
  bounds: (xmin: -6.30, xmax: 6.30, ymin: -93.00, ymax: 7.00),
  // Let escaping paths continue beyond the surface mesh; the fixed artwork
  // box performs the final visual clipping at the cover edge.
  trajectory-bounds: (xmin: -9.0, xmax: 9.0, ymin: -14.0, ymax: 8.0),
)

// Two fixed black holes generate a smoothly depth-limited, softened Newtonian
// potential. The surface height, force field, and trajectory height below all
// use this same scalar potential.
#let fdg-double-well-art(code-edition: "scheme") = {
  import calc: cos, max, min, pi, pow, sin, sqrt

  let tuning = fdg-cover-tuning
  let colors = if code-edition == "clojure" {
    tuning.cljs-colors
  } else {
    tuning.scheme-colors
  }
  let h1 = tuning.first-hole
  let h2 = tuning.second-hole
  let holes = ((h1.x, h1.y, h1.mass), (h2.x, h2.y, h2.mass))
  let softening = tuning.softening
  let raw-potential(x, y) = {
    let value = 0.0
    for (cx, cy, mass) in holes {
      value -= mass / sqrt(pow(x - cx, 2) + pow(y - cy, 2) + pow(softening, 2))
    }
    value
  }
  // U = -C tanh((-V) / C), where V is the softened Newtonian potential.
  // This keeps the wells finite without a hard, visually clipped floor.
  let surface-height(x, y) = {
    let depth = -raw-potential(x, y)
    -tuning.depth-cap * calc.tanh(depth / tuning.depth-cap)
  }
  let force(x, y) = {
    let fx = 0.0
    let fy = 0.0
    for (cx, cy, mass) in holes {
      let dx = x - cx
      let dy = y - cy
      let r3 = pow(pow(dx, 2) + pow(dy, 2) + pow(softening, 2), 1.5)
      fx -= mass * dx / r3
      fy -= mass * dy / r3
    }
    // -grad(U) = sech²((-V)/C) * -grad(V). Writing sech² as
    // 1 - tanh² avoids needing a separate hyperbolic-cosine implementation.
    let depth = -raw-potential(x, y)
    let compression = 1 - pow(calc.tanh(depth / tuning.depth-cap), 2)
    (compression * fx, compression * fy)
  }

  // Deterministic fourth-order Runge-Kutta integration of
  //   d(x, y)/dt = (vx, vy),  d(vx, vy)/dt = force(x, y).
  // The points are sampled down only for drawing; every RK4 step is retained
  // by the simulation. The visible z coordinate follows the same potential.
  let trajectory(launch) = {
    let x = launch.x
    let y0 = launch.y
    let y = y0
    let vx = launch.vx
    let vy = launch.vy
    let points = ()
    let entered = false
    let b = tuning.trajectory-bounds
    for i in range(tuning.steps) {
      let in-frame = x >= b.xmin and x <= b.xmax and y >= b.ymin and y <= b.ymax
      if in-frame { entered = true }
      if entered and not in-frame { break }
      if in-frame and calc.rem(i, tuning.sample-every) == 0 {
        let z = surface-height(x, y)
        points.push((x, y, z + 0.075))
      }
      let dt = tuning.dt

      let k1x = vx
      let k1y = vy
      let (k1vx, k1vy) = force(x, y)

      let k2x = vx + dt * k1vx / 2
      let k2y = vy + dt * k1vy / 2
      let (k2vx, k2vy) = force(
        x + dt * k1x / 2,
        y + dt * k1y / 2,
      )

      let k3x = vx + dt * k2vx / 2
      let k3y = vy + dt * k2vy / 2
      let (k3vx, k3vy) = force(
        x + dt * k2x / 2,
        y + dt * k2y / 2,
      )

      let k4x = vx + dt * k3vx
      let k4y = vy + dt * k3vy
      let (k4vx, k4vy) = force(
        x + dt * k3x,
        y + dt * k3y,
      )

      x += dt * (k1x + 2 * k2x + 2 * k3x + k4x) / 6
      y += dt * (k1y + 2 * k2y + 2 * k3y + k4y) / 6
      vx += dt * (k1vx + 2 * k2vx + 2 * k3vx + k4vx) / 6
      vy += dt * (k1vy + 2 * k2vy + 2 * k3vy + k4vy) / 6
      let distance-to-second = sqrt(
        pow(x - holes.at(1).at(0), 2) + pow(y - holes.at(1).at(1), 2),
      )
      if distance-to-second < tuning.capture-radius {
        points.push((
          x,
          y,
          surface-height(x, y) + 0.075,
        ))
        break
      }
    }
    points
  }

  let escaped = trajectory(tuning.escaped)
  let captured = trajectory(tuning.captured)

  let mix-rgb(a, b, t) = {
    let channel(i) = int(calc.round(a.at(i) + (b.at(i) - a.at(i)) * t))
    rgb(channel(0), channel(1), channel(2))
  }
  let surface-color(depth) = {
    let stops = colors.surface-gradient
    if depth <= stops.first().first() {
      rgb(..stops.first().last())
    } else if depth >= stops.last().first() {
      rgb(..stops.last().last())
    } else {
      let result = rgb("#121b25")
      for i in range(stops.len() - 1) {
        let (d0, c0) = stops.at(i)
        let (d1, c1) = stops.at(i + 1)
        if depth >= d0 and depth < d1 {
          result = mix-rgb(c0, c1, (depth - d0) / (d1 - d0))
        }
      }
      result
    }
  }

  // The fixed box and floating 3D group are deliberate: camera rotation may
  // project geometry beyond the artwork, but must never change its 8.5×7.15in
  // layout bounds or push the title panel down in the full book.
  box(width: 8.5in, height: 7.15in, clip: true)[
    #cetz.canvas(length: 1in, {
      import cetz.draw: *

      rect((0, 0), (8.5, 7.15), fill: colors.art-background, stroke: none)

      floating(group({
        translate(tuning.view-shift)
        rotate(tuning.camera.roll)
        scale(tuning.view-scale)
        ortho(x: tuning.camera.x, y: tuning.camera.y, {
          let nx = tuning.mesh.x
          let ny = tuning.mesh.y
          let xmin = tuning.bounds.xmin
          let xmax = tuning.bounds.xmax
          let ymin = tuning.bounds.ymin
          let ymax = tuning.bounds.ymax

          let draw-surface-quad(p00, p10, p11, p01, opacity: 1.0) = {
            let (x00, y00) = p00
            let (x10, y10) = p10
            let (x11, y11) = p11
            let (x01, y01) = p01
            let z00 = surface-height(x00, y00)
            let z10 = surface-height(x10, y10)
            let z11 = surface-height(x11, y11)
            let z01 = surface-height(x01, y01)
            let depth = -(z00 + z10 + z11 + z01) / 4
            let paint = surface-color(depth)
            let paint = if opacity < 1 {
              paint.transparentize(100% * (1 - opacity))
            } else {
              paint
            }
            line(
              (x00, y00, z00),
              (x10, y10, z10),
              (x11, y11, z11),
              (x01, y01, z01),
              close: true,
              fill: paint,
              stroke: (paint: paint, thickness: 0.22pt),
            )
          }

          // Low-resolution Cartesian field. The polar patches below are drawn
          // over it, so their circular boundaries need no polygon clipping.
          for j in range(ny - 1) {
            for i in range(nx - 1) {
              let x0 = xmin + (xmax - xmin) * i / (nx - 1)
              let x1 = xmin + (xmax - xmin) * (i + 1) / (nx - 1)
              let y0 = ymax - (ymax - ymin) * j / (ny - 1)
              let y1 = ymax - (ymax - ymin) * (j + 1) / (ny - 1)
              let cx = (x0 + x1) / 2
              let cy = (y0 + y1) / 2
              let half-diagonal = sqrt(
                pow((x1 - x0) / 2, 2) + pow((y1 - y0) / 2, 2),
              )
              let covered-by-polar = false
              let solid-radius = (
                tuning.polar-mesh.outer-radius - tuning.polar-mesh.transition-width
              )
              for (hx, hy, _) in holes {
                let center-distance = sqrt(pow(cx - hx, 2) + pow(cy - hy, 2))
                if center-distance + half-diagonal < solid-radius {
                  covered-by-polar = true
                }
              }
              if not covered-by-polar {
                draw-surface-quad((x0, y0), (x1, y0), (x1, y1), (x0, y1))
              }
            }
          }

          // High-resolution curvilinear O-grids. Every cell is an annular sector
          // in (r, theta), mapped back into the common Cartesian potential.
          let polar = tuning.polar-mesh
          for (hx, hy, _) in holes {
            let inner-radius = max(
              0.0,
              min(polar.cutoff-radius, polar.outer-radius),
            )
            let radial-span = polar.outer-radius - inner-radius
            for ri in range(polar.radial-divisions) {
              let r0 = (
                inner-radius
                  + radial-span
                    * pow(
                      ri / polar.radial-divisions,
                      polar.radial-power,
                    )
              )
              let r1 = (
                inner-radius
                  + radial-span
                    * pow(
                      (ri + 1) / polar.radial-divisions,
                      polar.radial-power,
                    )
              )
              let radial-midpoint = (r0 + r1) / 2
              let transition-start = polar.outer-radius - polar.transition-width
              let opacity = if radial-midpoint <= transition-start {
                1.0
              } else {
                let linear-opacity = max(
                  0.0,
                  min(
                    1.0,
                    (polar.outer-radius - radial-midpoint) / polar.transition-width,
                  ),
                )
                pow(linear-opacity, polar.transition-power)
              }
              for ai in range(polar.angular-divisions) {
                let theta0 = 2 * pi * ai / polar.angular-divisions
                let theta1 = 2 * pi * (ai + 1) / polar.angular-divisions
                draw-surface-quad(
                  (hx + r0 * cos(theta0), hy + r0 * sin(theta0)),
                  (hx + r1 * cos(theta0), hy + r1 * sin(theta0)),
                  (hx + r1 * cos(theta1), hy + r1 * sin(theta1)),
                  (hx + r0 * cos(theta1), hy + r0 * sin(theta1)),
                  opacity: opacity,
                )
              }
            }
          }

          // Pale under-strokes separate the paths from every part of the surface.
          line(..escaped, stroke: (paint: colors.path-understroke, thickness: 4.5pt))
          line(..captured, stroke: (paint: colors.path-understroke, thickness: 4.5pt))
          line(..escaped, stroke: (paint: colors.escaped-path, thickness: 2.5pt))
          line(..captured, stroke: (paint: colors.captured-path, thickness: 2.5pt))
        })
      }))
    })
  ]
}

#let fdg-cover-page(code-edition: "scheme") = {
  let edition-subtitle = fdg-edition-subtitle(code-edition)
  let colors = if code-edition == "clojure" {
    fdg-cover-tuning.cljs-colors
  } else {
    fdg-cover-tuning.scheme-colors
  }
  box(width: 8.5in, height: 11in)[
    #stack(
      dir: ttb,
      spacing: 0pt,
      fdg-double-well-art(code-edition: code-edition),
      block(width: 8.5in, height: 0.08in, fill: white),
      block(width: 8.5in, height: 3.77in, fill: colors.title-panel)[
        #pad(left: 1.03in, top: 0.43in, right: 0.35in)[
          #text(font: "Helvetica Neue", size: 31pt, tracking: 4pt, fill: colors.title-ink)[
            FUNCTIONAL DIFFERENTIAL \
            GEOMETRY
          ]
          #if edition-subtitle != none {
            text(
              font: "Helvetica Neue",
              size: 13pt,
              tracking: 1.2pt,
              fill: colors.accent,
              edition-subtitle,
            )
          }
        ]
        #v(if edition-subtitle != none { 0.10in } else { 0.38in })
        #line(length: 100%, stroke: (paint: colors.divider, thickness: 1.1pt, dash: "densely-dotted"))
        #pad(left: 1.05in, top: 0.18in)[
          #text(font: "Helvetica Neue", size: 21pt, fill: colors.accent)[
            Gerald Jay Sussman and Jack Wisdom
          ]

          #v(0.20in)
          #text(font: "Helvetica Neue", size: 16pt, fill: colors.accent)[
            with Will Farr
          ]
        ]
      ],
    )
  ]
}

#set page(width: 8.5in, height: 11in, margin: 0pt, header: none, footer: none)
#let code-edition = sys.inputs.at("code", default: "scheme")
#fdg-cover-page(code-edition: "both")
