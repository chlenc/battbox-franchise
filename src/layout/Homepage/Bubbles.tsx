/** @jsx jsx */
import React, { FC, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import { bounce } from "@src/layout/Homepage/Waves";

const b1 = css`
position: absolute;
bottom: 50vh;
right: 10vw;
animation: ${bounce} 5s ease infinite;

@media(max-width: 1280px){
  bottom: 60vh;
  right: 10vw;
}

@media(max-width: 768px){
  bottom: 45vh;
}

`;
const b2 = css`
position: absolute;
bottom: 35vh;
left: 20vw;
animation: ${bounce} 6s ease infinite;

@media(max-width: 1280px){
  bottom: 30vh;
  right: 10vw;
}

@media(max-width: 768px){
   background: 47vh;
}
`;
const b3 = css`
position: absolute;
bottom: 40vh;
right: 20vw;
animation: ${bounce} 4s ease infinite;

@media(max-width: 768px){
  bottom: 30vh;
}
`;

const Bubbles: FC = () => <Fragment>
    <svg css={b1} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.5" cy="5.5" r="5.5" fill="#15E9E9" fillOpacity="0.6"/>
        <circle cx="5.5" cy="5.5" r="5.5" fill="#15E9E9" fillOpacity="0.6"/>
    </svg>
    <svg css={b2} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#15E9E9" fillOpacity="0.6"/>
        <circle cx="9" cy="9" r="9" fill="#15E9E9" fillOpacity="0.6"/>
    </svg>
    <svg css={b3} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill="#15E9E9" fillOpacity="0.6"/>
        <circle cx="15" cy="15" r="15" fill="#15E9E9" fillOpacity="0.6"/>
    </svg>
</Fragment>

export default Bubbles
