import React, { useState } from "react"
import * as style from "./index.module.less"
import NrealLogoSVG from "../../images/svg/nreal.svg"
import useBigScreen from "../../hooks/bigScreen"
import LangWindow from "./langwindow"
import MenuWindow from "./menuwindow"
const Menu = () => {
  const bigScreen = useBigScreen()
  const [showLangWindow,setshowLangWindow] = useState(false)
  const clicklang = () =>{
    setshowLangWindow(!showLangWindow)
  }
  const [showMenuWindow,setshowMenuWindow] = useState(false)
  const clickmenu = () =>{
    setshowMenuWindow(!showMenuWindow)
  }
  return (
    <div className={style.menu}>
      {bigScreen ? (
        <>
          <div className={style.logo}>
            <NrealLogoSVG className={style.svg} />
          </div>
          <div className={style.menus}>
            <div className={style.menuitem}>Light</div>
            <div className={style.menuitem}>Air</div>
            <div className={style.menuitem}>Nebula</div>
            <div className={style.menuitem}>Developer</div>
            <div className={`${style.menuitem} ${style.iconLang}`} aria-hidden="true" onClick={clicklang}>
              <span style={{ opacity: 0 }}>ddd</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={style.logoMobile} aria-hidden="true" onClick={clickmenu}>
          </div>
        </>
      )}
      {showLangWindow?<LangWindow  clicklang={clicklang}/>:""}
      {showMenuWindow?<MenuWindow clickmenu={clickmenu}/>:""}
    </div>
  )
}
export default Menu
