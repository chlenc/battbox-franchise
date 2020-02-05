/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import stantion from "@src/assets/icons/stantion.png";

const Root = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 768px){
justify-content: flex-start;
}
`;

const imgStyle = css` 
max-width: 100%;
max-height: 100%;
@media(max-width: 768px){
max-width: 75%;
}
`

const Picture = () =>
    <Root>
    <img css={imgStyle} src={stantion}/>
</Root>

export default Picture
