/** @jsx jsx */
import React, { FC } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import logo from '@src/assets/icons/battery.png'

const Root = styled.img`

width: 25vw;
height: auto;

@media (max-width: 768px) {
width: 211px;
height: 272px;
}
`;


const Battery: FC = () => <Root src={logo} alt="phone and battery" />;

export default Battery
