import React from "react";
import Tooltip from "rc-tooltip";
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {colors, fonts} from "@src/vars";

const arrowStyle = css`
    width: 1vw;
    height: 1vw;
    position: absolute;
    top: -0.93vw;
    left: -0.3vw;
    transform: rotate(180deg);
`;

const Icon = styled.svg`
width: 1.3vw;
height: 1.3vw;
position: absolute;
left: -48px;
//@media(max-width: 768px){
//  width: 20px;
//  height: 20px;
//  left: auto;
//  right: 1px;
//}
`

const Arrow = () => <svg css={arrowStyle} width="45" height="43" viewBox="0 0 45 43" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
    <path
        d="M16.4951 4.05287C19.1241 -0.914695 26.2401 -0.914685 28.8691 4.05288L44.0344 32.7083C46.5016 37.3702 43.122 42.9826 37.8474 42.9826H7.51689C2.24231 42.9826 -1.13735 37.3702 1.3299 32.7083L16.4951 4.05287Z"
        fill="#fff"/>
</svg>

const Text = styled.div`
${fonts.block_text};
color:${colors.gray};
`


const Question: React.FunctionComponent<{ text: string }> = ({text}) =>
    <Tooltip
        placement="topLeft"
        overlay={<Text>{text}</Text>}
        align={{offset: [-40, -10]}}
        trigger="click"
        // arrowContent={<Arrow/>}
    >
        <Icon width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 0.320007C7.12414 0.320007 0.320007 7.12414 0.320007 15.5C0.320007 23.8759 7.12414 30.68 15.5 30.68C23.8759 30.68 30.68 23.8759 30.68 15.5C30.68 7.12414 23.8759 0.320007 15.5 0.320007ZM15.5 1.64001C23.1625 1.64001 29.36 7.83752 29.36 15.5C29.36 23.1625 23.1625 29.36 15.5 29.36C7.83752 29.36 1.64001 23.1625 1.64001 15.5C1.64001 7.83752 7.83752 1.64001 15.5 1.64001ZM15.5 6.26001C14.9749 6.26001 14.4713 6.46861 14.0999 6.83994C13.7286 7.21126 13.52 7.71488 13.52 8.24001C13.52 8.76514 13.7286 9.26876 14.0999 9.64008C14.4713 10.0114 14.9749 10.22 15.5 10.22C16.0251 10.22 16.5288 10.0114 16.9001 9.64008C17.2714 9.26876 17.48 8.76514 17.48 8.24001C17.48 7.71488 17.2714 7.21126 16.9001 6.83994C16.5288 6.46861 16.0251 6.26001 15.5 6.26001ZM12.86 12.86V14.18H13.52H14.18V22.76H13.52H12.86V24.08H13.52H14.18H16.82H17.48H18.14V22.76H17.48H16.82V12.86H16.16H13.52H12.86Z" fill="#15E9E9"/>
        </Icon>

    </Tooltip>;

export default Question
