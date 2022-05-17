import React, { useState } from "react"
import { IntlProvider } from "react-intl"
import { graphql, StaticQuery } from "gatsby"
// import enJSON from "../intl/en.json"
import zhJSON from "../intl/zh.json"
// import koJSON from "../intl/ko.json"
import jaJSON from "../intl/ja.json"
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const LangContext = React.createContext()
export const LangSetContext = React.createContext()

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(process.env.DEFAULT_LANG)
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulLangJson {
            nodes {
              homepage {
                internal {
                  content
                }
              }
              node_locale
            }
          }
        }
      `}
      render={data => {
        const jsonAry = data?.allContentfulLangJson.nodes
        
        let enObj = jsonAry.find(item => item.node_locale === "en")
        let koObj = jsonAry.find(item => item.node_locale === "ko")
        const langJsonConfig = {
          en: JSON.parse(enObj.homepage.internal.content),
          zh: zhJSON,
          ko: JSON.parse(koObj.homepage.internal.content),
          ja: jaJSON,
        }
        debugger
       return (
          <LangContext.Provider value={lang}>
            <LangSetContext.Provider value={setLang}>
              <IntlProvider locale={lang} messages={langJsonConfig[lang]}>
                {children}
              </IntlProvider>
            </LangSetContext.Provider>
          </LangContext.Provider>
        )
      }}
    />
  )
}
