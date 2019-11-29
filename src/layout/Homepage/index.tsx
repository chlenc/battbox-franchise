import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import Waves from "@src/layout/Homepage/Waves";
import LogoBattBox from "@src/layout/Homepage/LogoBattBox";
import Bubbles from "@src/layout/Homepage/Bubbles";
import Battery from "@src/layout/Homepage/Battery";
import HomepageIconSet from "@src/layout/Homepage/HomepageIconSet";

const Root = styled.div`
background-color: ${colors.bgDark};
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
${fonts.proxima_white_120};
white-space: nowrap;
b{
font-weight: 700;
}
`


const SubTitle = styled.h2`
${fonts.roboto_white_64};
padding-bottom: 10vh;
`

export default class Homepage extends React.Component {

    render() {
        return <Root>
            <LogoBattBox/>
            <Title>Франшиза <b>Batt</b>Box</Title>
            <SubTitle>А вы на связи?</SubTitle>
            <Battery/>

            <Bubbles/>
            <Waves/>
        </Root>;
    }

}
