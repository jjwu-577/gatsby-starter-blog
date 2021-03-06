// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"


// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"

import {LangProvider} from "./src/context/lang-context"

export const wrapRootElement = ({ element }) => (
  <LangProvider>{element}</LangProvider>
)