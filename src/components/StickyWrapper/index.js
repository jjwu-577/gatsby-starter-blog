import React from "react"
import styled from "styled-components"
import * as style from "./index.module.less"

const ossUrl="https://resource.nreal.ai/web/"
let bgDefault=`${ossUrl}images/air/home_kv.jpg`;

export const StickyContainer = styled.div`
  position: relative;
  width: ${props=>props.width};
  height: ${props => (props.stickyHeight ? props.stickyHeight : "200vh")};
  margin-top: 0;
  margin-right:${props=>props.marginRight?props.marginRight:''};
`
const StickyBg = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0; /* means when top=0 sticky enabled */
  margin-top: 0; /* starting position */
  text-align: center;
  font-size: 100px;
  color: white;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props =>props.bgImgUrl ? props.bgImgUrl : bgDefault});
`
const Spacer = styled.div`
  height: ${props => props.h};
`

const StickyPageUnit = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
  margin-top: 0;
  height: 100vh;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  justify-content: center;
  align-items: center;
`
const StickyWrapper = ({
  bigScreen, //控制当前画布上文字大小
  stickyHeight, //画布粘性定位滚动高度
  bgImgUrl, //画布背景图
  text, //画布文字
  divSpacer, //文字部分距离上方高度
  svg, //是否 这里文字部分为air和light两个svg
  width, //当前画布宽度
  svgCom, //这里文字部分为air和light两个svg
  marginRight //如果不是整屏，会有这个属性
}) => {
  const SvgCom =svgCom
  const textRender = text => {
    return text.map(item => {
      return (
        <>
          {item.value}
          <Spacer h={item.spacer} />
        </>
      )
    })
  }
  return (
    <StickyContainer marginRight={marginRight} width={width} stickyHeight={stickyHeight}>
      <StickyBg bgImgUrl={bgImgUrl}></StickyBg>
      <StickyPageUnit>
        {divSpacer !== 0 ? <Spacer h={divSpacer} /> : ""}
        {svg?<SvgCom/>:
          <div
            className={`
              ${style.innerTitle} ${bigScreen?"txL":"txM"}
            `}
          >
            {textRender(text)}
          </div>
        }
      </StickyPageUnit>
    </StickyContainer>
  )
}

export default StickyWrapper
