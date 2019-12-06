import React from "react";
import styled from "@emotion/styled";
import { colors, fonts, gotham_bold } from "@src/vars";
import Waves from "@src/layout/Homepage/Waves";
import LogoBattBox from "@src/layout/Homepage/LogoBattBox";
import Bubbles from "@src/layout/Homepage/Bubbles";
import Battery from "@src/layout/Homepage/Battery";
import device from "current-device";

const Root = styled.div`
background-color: ${colors.bgDark};
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
${fonts.gotham_white_120};
margin: 260px 0 0 0 ;
white-space: nowrap;
b{
 ${gotham_bold};
}

@media (max-width: 1280px) {
    ${fonts.gotham_white_72};
    margin: 160px 0 30px 0 ;
}
@media (max-width: 768px) {
    ${fonts.gotham_white_34};
    margin: 150px 0 10px 0 ;
}

`
const SubTitle = styled.h2`
${fonts.roboto_white_64};
padding-bottom: 152px;
margin: 0;

@media (max-width: 1280px) {
    ${fonts.roboto_white_36};
    padding-bottom: 100px;
}

@media (max-width: 768px) {
    ${fonts.roboto_white_20};
    padding-bottom: 50px;
}
`

let lastScrollY = 0;

export default class Homepage extends React.Component {

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll, true);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    //
    //
    // handleScroll = () => {
    //     const homepageIconSetRef = document.getElementById('home');
    //     if (lastScrollY == 0 && homepageIconSetRef && device.desktop()) {
    //         window.requestAnimationFrame(() => {
    //             scrollTo({top: homepageIconSetRef!.offsetHeight, behavior: 'smooth'})
    //         });
    //     }
    //     lastScrollY = window.scrollY;
    // };

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
