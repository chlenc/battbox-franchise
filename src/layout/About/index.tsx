/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import Picture from "@src/layout/About/Picture";
import { css, jsx } from "@emotion/core";

const Root = styled.div`
background: ${colors.bgDark};
display: flex;
align-items: center;
@media (max-width: 768px){
flex-direction: column;
flex-flow: wrap-reverse;
padding-bottom: 1vh;
}
`

const Title = styled.div`
${fonts.gotham_white_36_medium};

@media (max-width: 1280px){
${fonts.gotham_white_24_medium};
}
@media (max-width: 768px){
${fonts.gotham_white_18_medium};
}

`
const Text = styled.div`
margin: 13vw 0 ;
padding: 0 4vw 0 8.8vw;
flex: 1;
& > * {
margin-bottom: 60px;
}
${fonts.roboto_white_24};

@media (max-width: 1280px){
${fonts.roboto_white_16};
padding: 0  0  0 8.8vw;
}
@media (max-width: 768px){
${fonts.roboto_white_15};
margin: 0 ;
padding: 0 8.8vw;
& > * {
margin-bottom: 30px;
}
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

const arrowStyle = css`@media (max-width: 768px){display: none;}`

const Arrow = () => <svg css={arrowStyle} width="91" height="16" viewBox="0 0 91 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M90.7071 8.70711C91.0976 8.31658 91.0976 7.68342 90.7071 7.29289L84.3431 0.928932C83.9526 0.538408 83.3195 0.538408 82.9289 0.928932C82.5384 1.31946 82.5384 1.95262 82.9289 2.34315L88.5858 8L82.9289 13.6569C82.5384 14.0474 82.5384 14.6805 82.9289 15.0711C83.3195 15.4616 83.9526 15.4616 84.3431 15.0711L90.7071 8.70711ZM0 9H90V7H0V9Z"
        fill="white"/>
</svg>


const About = () => <Root>
    <Text>
        <Title>
            BattBox - сервис почасовой аренды
            power bank.
        </Title>
        <div>
            Больше не нужно сидеть у розетки, вернуть
            зарядку можно
            в любую станцию в сети BattBox, даже в другом городе!
            В городских условиях наш сервис обрел успех
            и востребованность со стороны пользователей и заведений.
            <br/><br/>
            Чтобы открыть свой бизнес нужно поставить от 20 станций
            и вы начнете зарабатывать уже на следующий день.
            Успейте стать первыми в своем городе
            и запусить автономный бизнес по прокату
            зарядок вместе с BattBox.
        </div>
        <More href="/">подробнее&nbsp;<Arrow/></More>
    </Text>

    <Picture/>

</Root>

export default About
