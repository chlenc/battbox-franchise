/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import map from './map.svg'
import { css, jsx } from "@emotion/core";
const Root = styled.div`
padding: 100px 9vw;
margin-top: -1px;
@media(max-width: 768px){
background-color: ${colors.bgDark};
}
`


const Title = styled.div`
${fonts.gotham_black_45_medium};
margin-bottom: 0px;

@media(max-width: 1280px){
  ${fonts.gotham_black_32_medium};
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
            <Title>Заряженные города</Title>
            <img css={css`width: 100%`} src={map} alt="map"/>
        </Root>
    }
}
