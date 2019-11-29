/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const rootStyle = css`
width: 158px;
height: 68px;
`

const Battery = () => <svg css={rootStyle} width="158" height="68" viewBox="0 0 158 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
        <path d="M14.4671 51.584C11.6093 51.584 9.21591 51.7636 6.85823 51.584C5.91116 51.5985 4.97171 51.4119 4.10125 51.0364C3.23078 50.6609 2.44889 50.1049 1.80664 49.4049C1.1644 48.7048 0.676256 47.8763 0.374098 46.9736C0.0719401 46.0709 -0.0374352 45.1143 0.053121 44.1662C0.053121 37.359 0.053121 30.5518 0.053121 23.7446C-0.0522687 22.9511 0.0137641 22.144 0.246713 21.3784C0.479662 20.6129 0.874052 19.9068 1.40298 19.3085C1.93192 18.7101 2.58295 18.2335 3.3117 17.9111C4.04044 17.5887 4.82976 17.4281 5.62581 17.4403C8.43002 17.1709 11.2699 17.4403 14.5564 17.4403C14.5564 13.8482 14.6993 10.6691 14.5564 7.54388C14.3242 2.96384 16.8605 0.952219 20.8971 0.251744C22.1917 0.0581451 23.5002 -0.025966 24.8087 0.000292355H147.515C156.321 0.000292355 157.946 1.67066 157.946 10.5613C157.946 26.8818 157.946 43.2142 157.946 59.5587C157.946 65.2523 155.445 67.9464 149.801 67.9644C107.387 67.9644 64.9666 67.9644 22.5403 67.9644C16.8605 67.9644 14.485 65.3062 14.4314 59.5227C14.4492 57.116 14.4671 54.7092 14.4671 51.584ZM86.269 65.0727H147.622C153.963 65.0727 154.374 64.6596 154.374 58.5169V9.07055C154.374 3.41286 154.088 3.07161 148.587 3.07161H24.0943C18.3787 3.07161 18.0393 3.50267 17.9679 9.26812C17.9679 12.5729 19.0217 17.135 17.3249 18.8233C15.6281 20.5116 10.9842 20.0447 7.62626 20.1524C4.82206 20.2602 3.6075 21.1582 3.67894 24.1936C3.87542 30.6955 3.8397 37.1973 3.67894 43.6992C3.67894 47.1297 4.91136 48.6025 8.41215 48.7103C17.95 48.9977 17.9322 49.0875 17.9679 58.5888C17.9679 64.3722 18.6645 65.0727 24.4515 65.0727H86.269Z" fill="white"/>
        <rect x="23" y="7" width="127" height="54" rx="2" fill="url(#paint0_linear)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear" x1="34" y1="57.5" x2="139" y2="68" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15E9E9"/>
            <stop offset="1" stopColor="#15E9E9" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="clip0">
            <rect width="158" height="68" fill="white"/>
        </clipPath>
    </defs>
</svg>


export default Battery
