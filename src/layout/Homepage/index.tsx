import React from "react";
import styled from "@emotion/styled";
import { colors, fonts, gotham_bold } from "@src/vars";
import Waves from "@src/layout/Homepage/Waves";
import LogoBattBox from "@src/layout/Homepage/LogoBattBox";
import Bubbles from "@src/layout/Homepage/Bubbles";
import Battery from "@src/layout/Homepage/Battery";

const Root = styled.div`
background-color: ${colors.bgDark};
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position:relative; 

`

const Title = styled.h1`
${fonts.gotham_white_120};
margin: 24vh 0 1vh 0 ;
white-space: nowrap;
b{
 ${gotham_bold};
}

@media (max-width: 1280px) {
    ${fonts.gotham_white_72};
}
@media (max-width: 768px) {
    ${fonts.gotham_white_34};
}
@media (max-width: 375px) {
font-size: 24px;
}

`
const SubTitle = styled.h2`
${fonts.roboto_white_64};
padding-bottom: 14vh;
margin: 0;

@media (max-width: 1280px) {
    ${fonts.roboto_white_36};
}

@media (max-width: 768px) {
    ${fonts.roboto_white_20};
}
`


export default class Homepage extends React.Component {

    render() {
        return <Root id="home">
            <LogoBattBox/>
            <Title>Франшиза <b>Batt</b>Box</Title>
            <SubTitle>А вы на связи?</SubTitle>
            <Battery/>

            <Bubbles/>
            <Waves/>
        </Root>;
    }

}
