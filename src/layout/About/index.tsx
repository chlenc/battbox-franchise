/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import Picture from "@src/layout/About/Picture";
import { css, jsx } from "@emotion/core";

const Root = styled.div`
//padding: 5vw 12vw 0 12vw;
padding-top: 5vw;
${mainPadding};
background: ${colors.gray};
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px){
    padding-top: 70px;
    flex-direction: column;
}
`

const Title = styled.div`
${fonts.block_about_title};
padding-bottom: 34px;
`
const Text = styled.div`
flex: 1;
max-width: 584px;
${fonts.block_text};
@media (max-width: 1280px){
max-width: 400px;
}
@media (max-width: 768px){
  & > * {padding-bottom: 24px;}
}


`
const More = styled.a`
text-decoration:none;
display: flex;
align-items: center;
font-weight: 500;
@media (max-width: 768px){text-decoration: underline}
color: ${colors.white};
`

const Arrow = () => <svg css={css`@media (max-width: 768px){display: none;}`} width="91" height="16" viewBox="0 0 91 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M90.7071 8.70711C91.0976 8.31658 91.0976 7.68342 90.7071 7.29289L84.3431 0.928932C83.9526 0.538408 83.3195 0.538408 82.9289 0.928932C82.5384 1.31946 82.5384 1.95262 82.9289 2.34315L88.5858 8L82.9289 13.6569C82.5384 14.0474 82.5384 14.6805 82.9289 15.0711C83.3195 15.4616 83.9526 15.4616 84.3431 15.0711L90.7071 8.70711ZM0 9H90V7H0V9Z"
        fill="white"/>
</svg>


const About = () => <Root>
    <Text>
        <Title>
            BattBox - сервис проката зарядок
            для телефона
        </Title>
        <div css={css`padding-bottom: 200px; @media(max-width: 1280px){padding-bottom: 32px}`}>
            Чтобы открыть свой бизнес нужно поставить
            от 20 станций и вы начнете зарабатывать
            уже на следующий день.Успейте стать первыми
            в своем городе
            и запусить автономный бизнес
            по прокату
            зарядок вместе с BattBox.
        </div>
        <More target="_blank" href="https://batt-box.ru/">Подробнее&nbsp;<Arrow/></More>
    </Text>

    <Picture/>

</Root>

export default About
