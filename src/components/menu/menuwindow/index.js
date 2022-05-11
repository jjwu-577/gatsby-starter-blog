import React from "react";
import * as style from "./index.module.less"
import NrealLogoSVG from "../../../images/svg/nreal.svg"
const MenuWindow = ({clickmenu}) =>{
return (
    <div className={style.modal} aria-hidden="true" onClick={clickmenu}>
        <div className={style.content}>
            <div className={`${style.contentitemLogo}`}>
                <NrealLogoSVG />
            </div>
            <div className={style.contentitem}>首页</div>
            <div className={style.contentitem}>Light</div>
            <div className={style.contentitem}>Air</div>
            <div className={style.contentitem}>Nebula</div>
            <div className={style.contentitem}>开发者中心</div>
            <div
              style={{
                borderTop: "solid 1px white",
                width: 20,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 40,
              }}
            />
            <div className={style.contentitem}>English</div>
            <div className={style.contentitem}>简体中文</div>
            <div className={style.contentitem}>日本语</div>
            <div className={style.contentitem}>韩语</div>
        </div>
    </div>
)
}
export default MenuWindow