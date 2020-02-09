/** @jsx jsx */
import React, {FC} from "react";
import {jsx} from "@emotion/core";
import styled from "@emotion/styled";
import logo from './logo.svg'
import logo_m from './logo_m.svg'

const LogoBattBox = styled.div`
background: url(${logo}) center no-repeat;
background-size: contain;
width: 137px;
height: 55px;

@media(max-width: 1280px){
  width: 110px;
  height: 44px;
}
@media(max-width: 375px){
background: url(${logo_m}) center no-repeat;
background-size: contain;
  //width: 78px;
  //height: 30px;
}
`



export default LogoBattBox
