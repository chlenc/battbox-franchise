import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";

export default styled.input`
background: transparent;
height: 70px;
width: 100%;
cursor: text;
mix-blend-mode: normal;
border: 2px solid #1F5F62;
box-sizing: border-box;
border-radius: 12px;
outline: none;
text-align: center;
padding: 0;
box-shadow: none;
${fonts.input_font};

&::placeholder{
color: ${colors.gray};
}

@media(max-width: 1280px){
  height: 50px;
}
@media(max-width: 768px){
    height: 48px;
    background: rgb(46, 155, 152);
    border-radius: 10px;
    border-color: rgb(46, 155, 152);
    color: ${colors.white};
    text-align: left;
    padding: 0 12px;
        
    &::placeholder{
      color: ${colors.white};
    }
}

`
