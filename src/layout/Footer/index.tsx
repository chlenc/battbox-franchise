/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { jsx } from "@emotion/core";
import logo from '@src/assets/icons/logo.svg'

const Root = styled.div`
padding: 300px 0 55px  0 ;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${colors.bgDark};
& > * {
margin-bottom: 0.5vw;
}
@media(max-width: 1280px){
 padding: 165px 0 45px  0 ;
}

@media(max-width: 768px){
   padding: 60px 0 45px  0 ;
}

`


const Title = styled.div`
${fonts.gotham_white_45_medium};

@media(max-width: 1280px){
  ${fonts.gotham_white_32_medium};
}

@media(max-width: 768px){
  ${fonts.gotham_white_22_medium};
}

`

const Text = styled.div`
${fonts.gotham_white_34};
@media(max-width: 1280px){
 ${fonts.roboto_white_24};
}
@media(max-width: 768px){
  text-align: center;
}
`

const Link = styled.a`
${fonts.gotham_white_34};
color: ${colors.aqua};
text-decoration: underline;
margin-top: 300px;
@media(max-width: 1280px){
  ${fonts.roboto_white_24};
  color: ${colors.aqua};
  margin-top: 160px;
}
@media(max-width: 768px){
  color: ${colors.aqua};
  text-align: center;
}
`

const Image = styled.img`
 height: 100px;
 margin-bottom: 80px;

`
export default class Footer extends React.Component {
    render() {
        return <Root>
            <Image src={logo} alt="logo"/>
            <Title>Директор по развитию регионов</Title>
            <Title>Гончаров Дмитрий<br/><br/></Title>
            <Text>friend@batt-box.ru</Text>
            <Text> +7 (495) 150 46 40</Text>

            <Link href="https://batt-box.ru">batt-box.ru</Link>
        </Root>
    }
}
