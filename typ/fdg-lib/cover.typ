#import "@preview/cetz:0.5.2"

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
    vx: 0.67,
    vy: -0.36,
    color: rgb("#82df58"),
  ),
  captured: (
    x: -2.40,
    y: 2.50,
    vx: 1.0,
    vy: -0.5,
    color: rgb("#a0ef69").rotate(3rad),
  ),

  first-hole:  (x: -1.45, y:  0.35, mass: 1.00),
  second-hole: (x:  3.10, y: -4.35, mass: 1.12),
  softening: 0.02,       // rounds the otherwise singular potential surface
  capture-radius: 0.18,  // captured path stops this far from the second hole
  depth-cap: 2.20,       // smooth potential depth limit; used by art and physics

  dt: 0.004,             // lower = more accurate; change velocities before dt
  steps: 6000,
  sample-every: 10,      // lower = smoother paths, larger PDF
  mesh: (x: 100, y: 100), // surface resolution

  // 3D camera and framing:
  // x changes elevation/tilt; y turns the view left/right. CeTZ's ortho
  // projection has no angular z argument, so roll rotates the projected
  // composition in the cover plane.
  camera: (x: -60deg, y: 0deg, roll: 0deg),
  view-scale: 1.36,
  view-shift: (4.55, 6.20),
  // These bounds deliberately extend beyond the crop. This keeps the
  // rectangular edge of the sampled surface out of the finished artwork.
  bounds: (xmin: -6.30, xmax: 6.30, ymin: -8.00, ymax: 7.00),
  // Let escaping paths continue beyond the surface mesh; the fixed artwork
  // box performs the final visual clipping at the cover edge.
  trajectory-bounds: (xmin: -9.0, xmax: 9.0, ymin: -14.0, ymax: 8.0),
)

// Two fixed black holes generate a smoothly depth-limited, softened Newtonian
// potential. The surface height, force field, and trajectory height below all
// use this same scalar potential.
#let fdg-double-well-art() = {
  import calc: max, min, pow, sqrt

  let tuning = fdg-cover-tuning
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
        pow(x - holes.at(1).at(0), 2) + pow(y - holes.at(1).at(1), 2)
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
    let stops = (
      (0.42, (18, 27, 37)),
      (0.58, (34, 43, 85)),
      (0.76, (51, 78, 154)),
      (0.98, (112, 79, 194)),
      (1.25, (200, 36, 135)),
      (1.48, (228, 59, 50)),
      (1.72, (255, 157, 40)),
      (2.05, (255, 227, 90)),
    )
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

      rect((0, 0), (8.5, 7.15), fill: rgb("#031314"), stroke: none)

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

      for j in range(ny - 1) {
        for i in range(nx - 1) {
          let x0 = xmin + (xmax - xmin) * i / (nx - 1)
          let x1 = xmin + (xmax - xmin) * (i + 1) / (nx - 1)
          let y0 = ymax - (ymax - ymin) * j / (ny - 1)
          let y1 = ymax - (ymax - ymin) * (j + 1) / (ny - 1)
          let z00 = surface-height(x0, y0)
          let z10 = surface-height(x1, y0)
          let z11 = surface-height(x1, y1)
          let z01 = surface-height(x0, y1)
          let depth = -(z00 + z10 + z11 + z01) / 4
          let paint = surface-color(depth)
          line(
            (x0, y0, z00),
            (x1, y0, z10),
            (x1, y1, z11),
            (x0, y1, z01),
            close: true,
            fill: paint,
            stroke: (paint: paint, thickness: 0.22pt),
          )
        }
      }

      // Pale under-strokes separate the paths from every part of the surface.
      line(..escaped, stroke: (paint: rgb("#08241e"), thickness: 4.5pt))
      line(..captured, stroke: (paint: rgb("#08241e"), thickness: 4.5pt))
      line(..escaped, stroke: (paint: tuning.escaped.color, thickness: 2.5pt))
      line(..captured, stroke: (paint: tuning.captured.color, thickness: 2.5pt))

        })
      }))
    })
  ]
}

#let fdg-cover-page() = {
  box(width: 8.5in, height: 11in)[
    #stack(
      dir: ttb,
      spacing: 0pt,
      fdg-double-well-art(),
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

#set page(width: 8.5in, height: 11in, margin: 0pt, header: none, footer: none)
#fdg-cover-page()
