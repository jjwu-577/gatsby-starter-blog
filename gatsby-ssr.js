import React from "react"

import {LangProvider} from "./src/context/lang-context"

export const wrapRootElement = ({ element }) => (
  <LangProvider>{element}</LangProvider>
)