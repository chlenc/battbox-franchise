/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import logo from "@src/assets/icons/logo.svg";

const Root = styled.div`
display: flex;
justify-content: space-between;
background-color: ${colors.bgDark};
padding: 135px 0 163px 0;
${mainPadding};
@media(max-width: 768px){
  flex-direction: column;
  padding-top: 48px;
  padding-bottom: 48px;
}
`


const Title = styled.div`
${fonts.block_title};
${gotham};
b{
${gotham_bold};
}
`

const textStyle = css`
${fonts.block_small_title};
${gotham};
outline: none;
text-decoration: none;
`

const Link = styled.a`
${gotham};
color: ${colors.aqua};
text-decoration: underline;
margin-top: 300px;
font-size: 36px;
line-height: 44px;
@media(max-width: 1280px){
  font-size: 24px;
  margin-top: 160px;
}
@media(max-width: 768px){
  margin-top: 64px;
}
`

const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Description = styled.div`
  ${fonts.block_text};
  color: #5B5B5B;
`

export default class Footer extends React.Component {
    render() {
        return <Root>
            <Column css={css`padding-right: 40px;@media(max-width: 768px){padding-right: 0}`}>
                <div>
                    <Title>
                        Директор по развитию регионов<br/>
                        <b>Гончаров Дмитрий</b>
                    </Title><br/><br/><br/><br/>
                    <a css={textStyle} href="mailto:biz@batt-box.ru<">biz@batt-box.ru</a>
                    <br/>
                    <a css={textStyle} href="tel:+74951504640">+7 (495) 150 46 40</a>
                </div>
                <br/><br/><br/><br/>
                <Description>
                    Информация на сайте не является публичной офертой. ООО<br/>
                    БЭТТБОКС не гарантрует финансовые показатели в других регионых.
                </Description>
            </Column>
            <Column css={css`@media(max-width: 768px){flex-direction: row;    align-items: flex-end;}`}>
                <Logo/>
                <Link href="https://batt-box.ru">batt-box.ru</Link>
            </Column>
        </Root>
    }
}

const Logo  = styled.div`
width:205px;
height:83px;
background: url(${logo}) center no-repeat;
background-size: contain;
@media(max-width: 1280px){
width: 150px
}
;@media(max-width: 768px){display: none}
`
