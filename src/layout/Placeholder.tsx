/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import low from '@src/assets/icons/lowBattery.svg'
import {css, jsx} from "@emotion/core";

const Root = styled.div`
  background: #232323;
  position: fixed;
  top:0;bottom: 0;left:0;right:0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Placeholder = () =>
    <Root>
        <img css={css`width: 20vw;`} src={low} alt="low"/>
    </Root>

export default Placeholder
