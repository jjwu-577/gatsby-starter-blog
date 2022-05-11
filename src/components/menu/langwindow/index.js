import React from "react";
import * as style from "./index.module.less"
const LangWindow = ({clicklang}) =>{
return (
    <div className={style.modal} aria-hidden="true" onClick={clicklang}>
        <div className={style.content}>
            <div className={style.contentitem}>English</div>
            <div className={style.contentitem}>简体中文</div>
            <div className={style.contentitem}>日本语</div>
            <div className={style.contentitem}>韩语</div>
        </div>
    </div>
)
}
export default LangWindow