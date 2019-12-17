import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";

export default styled.input`
 background: ${colors.disabld};
border-radius: 1px;
outline: none;
border: none;
text-align: center;
cursor: text;

${fonts.roboto_black_20};
width: 250px;
height: 70px;

@media(max-width: 1380px){
${fonts.roboto_black_18};
width: 200px;
height: 50px;
}
@media(max-width: 1200px){ width: 180px}
@media(max-width: 1000px){ width: 150px}
@media(max-width: 880px){ width: 130px}
@media(max-width: 768px){ width: 100%}

&::placeholder{
color: ${colors.gray};
}


`
