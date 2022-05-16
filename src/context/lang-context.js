import React, { useState } from "react";
import { IntlProvider } from "react-intl" 
import enJSON from "../intl/en.json"
import zhJSON from "../intl/zh.json"
import koJSON from "../intl/ko.json"
import jaJSON from "../intl/ja.json"
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const LangContext = React.createContext();
export const LangSetContext = React.createContext();
const langJsonConfig = {
    en: enJSON,
    zh: zhJSON,
    ko: koJSON,
    ja: jaJSON
  }

export const LangProvider = ({ children }) => {
    const [lang,setLang] = useState(process.env.DEFAULT_LANG)
    return (
        <LangContext.Provider value={lang}>
            <LangSetContext.Provider value={setLang}>
            <IntlProvider locale={lang} messages={langJsonConfig[lang]}>
            {children}
            </IntlProvider>
            </LangSetContext.Provider>
        </LangContext.Provider>
    )
}
 