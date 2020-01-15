/** @jsx jsx */
import React from "react";
import Calculator from "../Calculator";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import map from './map.svg'
import { css, jsx } from "@emotion/core";
const Root = styled.div`
background: linear-gradient(0deg, #1A1A1A 16.33%, #313131 95.61%);
mix-blend-mode: normal;
@media(max-width: 768px){
  background: ${colors.bgDark};
}
`


const Title = styled.div`
${fonts.gotham_white_45_medium};
margin-bottom: 0px;

@media(max-width: 1280px){
  ${fonts.gotham_white_32_medium};
  margin-bottom: 0px;
}

@media(max-width: 768px){
  ${fonts.gotham_white_22_medium};
  margin-bottom: 10px;
}

`

export default class ChargedCities extends React.Component{

    render(){
        return <Root>
            <Calculator/>
            <Title>Заряженные города</Title>
            <img css={css`width: 100%`} src={map} alt="map"/>
        </Root>
    }
}
