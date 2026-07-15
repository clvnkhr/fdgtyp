#import "basics.typ": LaTeX, fdg-draft-mode
#import "cover.typ": fdg-cover-page

#let fdg-title-page(seed: none) = {
  set page(numbering: none)
  if fdg-draft-mode {
    align(center)[
      #place(top + left, seed)
      #v(32%)
      #text(size: 25pt, weight: "semibold")[Functional Differential Geometry]

      #v(1.2em)
      #text(size: 12pt, fill: rgb("#777"))[Draft mode]
    ]
    pagebreak()
  } else {
    page(margin: 0pt, header: none, footer: none)[
      #place(top + left, seed)
      #fdg-cover-page()
    ]
  }

  align(center)[
    #v(18%)
    #text(size: 25pt, weight: "semibold")[Functional Differential Geometry]

    #v(2em)
    #text(size: 13pt)[Gerald Jay Sussman and Jack Wisdom]

    #v(0.5em)
    #text(size: 11pt)[with Will Farr]

    #v(3em)
    The MIT Press \
    Cambridge, Massachusetts \
    London, England
  ]
  pagebreak()

  [
    #sym.copyright 2013 Massachusetts Institute of Technology

    #box(stroke: 0.5pt, inset: (x: 4pt, y: 2pt))[#text(size: 8pt, weight: "bold")[CC BY-NC-SA]]

    This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this license, visit creativecommons.org.

    Other than as provided by this license, no part of this book may be reproduced, transmitted, or displayed by any electronic or mechanical means without permission from the MIT Press or as permitted by law.

    MIT Press books may be purchased at special quantity discounts for business or sales promotional use. For information, please email #raw("special_sales@mitpress.mit.edu") or write to Special Sales Department, The MIT Press, 55 Hayward Street, Cambridge, MA 02142.

    This book was set in Computer Modern by the authors with the #LaTeX typesetting system and was printed and bound in the United States of America.

    #v(1.6em)
    Library of Congress Cataloging-in-Publication Data

    Sussman, Gerald Jay. \
    Functional Differential Geometry / Gerald Jay Sussman and Jack Wisdom; with Will Farr. \
    #h(1.2em)p. cm. \
    Includes bibliographical references and index. \
    ISBN 978-0-262-01934-7 (hardcover : alk. paper) \
    1. Geometry, Differential. 2. Functional Differential Equations. \
    3. Mathematical Physics. \
    I. Wisdom, Jack. II. Farr, Will. III. Title. \
    QC20.7.D52S87 2013 \
    516.3'6—dc23

    #align(right)[2012042107]

    #v(1em)
    10 #h(0.35em) 9 #h(0.35em) 8 #h(0.35em) 7 #h(0.35em) 6 #h(0.35em) 5 #h(0.35em) 4 #h(0.35em) 3 #h(0.35em) 2 #h(0.35em) 1
  ]
  pagebreak()

  quote(block: true)[
    The author has spared himself no pains in his endeavour to present the main ideas in the simplest and most intelligible form, and on the whole, in the sequence and connection in which they actually originated. In the interest of clearness, it appeared to me inevitable that I should repeat myself frequently, without paying the slightest attention to the elegance of the presentation. I adhered scrupulously to the precept of that brilliant theoretical physicist L. Boltzmann, according to whom matters of elegance ought be left to the tailor and to the cobbler.

    Albert Einstein, in Relativity, the Special and General Theory, (1961), p. v
  ]
  pagebreak()
}
