/** @jsx jsx */
import React from "react";
import Calculator from "../Calculator";
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import map from './map.svg'
import { css, jsx } from "@emotion/core";
const Root = styled.div`
${mainPadding};
background: ${colors.gray};
display: flex;
flex-direction: column;
`


const Title = styled.div`
${fonts.block_title};
`

export default class ChargedCities extends React.Component{

    render(){
        return <Root>
            <Title>Заряженные города</Title>
            <img css={css`width: 100%`} src={map} alt="map"/>
        </Root>
    }
}
