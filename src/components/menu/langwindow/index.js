import React,{useContext} from "react"
import * as style from "./index.module.less"
import { languagesList } from "../../../intl/langlist"
import { LangSetContext } from "../../../context/lang-context"
const LangWindow = ({ clicklang }) => {
  const langSetContext = useContext(LangSetContext)
  const setlang = lang => {
    langSetContext(lang)
  }
  return (
    <div className={style.modal} aria-hidden="true" onClick={clicklang}>
      <div className={style.content}>
        {languagesList.map(item => {
          return (
            <div
              aria-hidden="true"
              onClick={() => setlang(item.lang)}
              key={item.lang}
              className={style.contentitem}
            >
              {item.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default LangWindow
