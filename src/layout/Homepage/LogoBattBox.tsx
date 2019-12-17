/** @jsx jsx */
import React, { FC } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import logo from '@src/assets/icons/logo.svg'
const Root = styled.div`
    padding-top: 6vh;
    
    @media (max-width: 1280px){
         padding-top: 5vh;
    }
    
    @media (max-width: 768px) {
    width: 115.48px;
    height: 48.68px;
}
`

const LogoBattBox: FC = () => <Root>
    <img src={logo} alt="logo"/>
</Root>;

export default LogoBattBox
