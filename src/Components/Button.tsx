import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham_bold} from "@src/vars";

export default styled.button`
background: #232323;
border: 1px solid #000000;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
border-radius: 10px;
width: 100%;
height: 70px;
cursor: text;
mix-blend-mode: normal;
box-sizing: border-box;
outline: none;
text-align: center;
padding: 0;
${fonts.input_font};
color: ${colors.white};
${gotham_bold};

@media(max-width: 1280px){
  height: 50px;
}
`
