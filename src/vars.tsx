import {css} from "@emotion/core";
import GothamPro from "@src/assets/font/GothamPro.woff";
import GothamPro_Medium from "@src/assets/font/GothamPro-Medium.woff";
import GothamPro_Light from "@src/assets/font/GothamPro-Light.woff";
import GothamPro_Bold from "@src/assets/font/GothamPro-Bold.woff";
import HelveticaNeueCyr from "@src/assets/font/HelveticaNeueCyr-Bold.woff";
import {injectGlobal} from 'emotion';

injectGlobal`

  @font-face {
    font-family: "HelveticaNeueCyr";
    src: url('${HelveticaNeueCyr}') format('woff');
  }
  //==================
  @font-face {
    font-family: "GothamPro";
    src: url('${GothamPro}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Medium";
    src: url('${GothamPro_Medium}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Light";
    src: url('${GothamPro_Light}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Bold";
    src: url('${GothamPro_Bold}') format('woff');
  }

`;
//colors

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    aqua: '#15E9E9',
    bgDark: '#1A1A1A',
    gray: '#232323',
    //=========================
    aquaDisabled: '#10B8B8',
    disabld: '#F3F3F3',
};

const fontTemplate = css`
font-style: normal;
font-weight: normal;
text-align: left;
z-index: 2;
`;

export const helvetica_bold = css`
font-family: HelveticaNeueCyr;
${fontTemplate};
`

export const gotham_medium = css`
font-family: GothamPro-Medium;
${fontTemplate};
`;
export const gotham_bold = css`
font-family: GothamPro-Bold;
${fontTemplate};
`;
export const gotham_light = css`
font-family: GothamPro-Light;
${fontTemplate};
`;
export const gotham = css`
font-family: GothamPro;
${fontTemplate};
`;
export const roboto = css`
font-family: Roboto;
${fontTemplate};
`;


export const fonts = {
    how_it_works_title: css`
    ${gotham_bold};
    font-size: 25px;
    line-height: 30px;
    color: ${colors.aqua};
    text-align: left;
    @media (max-width: 1280px) {
      font-size: 22px;
      line-height: 25px;      
    }
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;      
    }
`,
    input_font: css`
  ${gotham_light};
  color: ${colors.gray};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`,

    block_title: css`
    ${gotham_bold};
    font-size: 45px;
    line-height: 55px;
    color: ${colors.white};
    text-align: left;
    @media (max-width: 1280px) {
      font-size: 32px;
      line-height: 39px;;      
    }
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 29px;;      
    }
`,
    block_small_title: css`
    ${gotham_bold};
    font-size: 42px;
    line-height: 51px;
    color: ${colors.white};
    text-align: left;
    @media (max-width: 1280px) {
      font-size: 32px;
      line-height: 39px;      
    }
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 29px;;      
    }
`,

    block_about_title: css`
    ${gotham_bold};
    font-size: 36px;
    line-height: 44px;
    color: ${colors.white};
    text-align: left;
    @media (max-width: 1280px) {
      font-size: 28px;
      line-height: 34px;      
    }
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;   
    }
`,
    block_text: css`
    ${gotham_light};
    font-size: 24px;
    line-height: 29px;
    color: ${colors.white};
    text-align: left;
    @media (max-width: 1280px) {
      font-size: 18px;
      line-height: 22px;      
    }
    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 18px;;   
    }
`,

    navbar_font: css`
  ${helvetica_bold};
  white-space: nowrap;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.065em;
  color: ${colors.white};
  :hover{
     color: ${colors.aqua};
  }
  @media(max-width: 1280px){
    font-size: 16px;
    line-height: 16px;
  }
  
  @media(max-width: 768px){   
    font-size: 18px;
    line-height: 18px;
    :hover{color: ${colors.white}}
  }
  
  `,

    home_title: css`
  ${gotham};
  color: ${colors.white};
  font-size: 5.7vw;
  line-height: 6.9vw;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px; 
    white-space: unset;
    padding-bottom: 24px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
  b{
    font-family: GothamPro-Bold;
  }
`,

    home_subtitle: css`
  ${gotham};
  color: ${colors.white};
  font-size: 34px;
  line-height: 41px;
  text-align: left;
  
  @media (max-width: 1280px) {
    font-size: 24px;
    line-height: 28px;
  }  
  @media (max-width: 865px) {
    font-size: 22px;
    line-height: 27px;
  }
    b{
    font-family: GothamPro-Bold;
  }
`,

    //========================
    gotham_white_120: css`
  ${gotham_light};
  font-size: 120px;
  line-height: 146px;
  color: ${colors.white};
`,
    gotham_white_72: css`
    ${gotham_light};
    font-size: 72px;
    line-height: 88px;
    color: ${colors.white};
`,
    gotham_white_34: css`
    ${gotham_light};
    font-size: 34px;
    line-height: 41px;
    color: ${colors.white};
`,
    gotham_black_45_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: ${colors.black};

`,
    gotham_black_32_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: ${colors.black};

`,
    gotham_white_36_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: left;
  color: ${colors.white};

`,
    gotham_white_24_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: ${colors.white};

`,
    gotham_white_18_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: ${colors.white};

`,
    gotham_black_22_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  color: ${colors.black};

`,
    gotham_black_22: css`
  ${gotham_light};
  font-size: 22px;
  line-height: 27px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_25: css`
  ${gotham_light};
  font-size: 25px;
  line-height: 30px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_25_medium: css`
  ${gotham_medium};
  font-size: 25px;
  line-height: 30px;
  color: ${colors.black};

`,
    gotham_black_18: css`
  ${gotham_light};
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_15: css`
  ${gotham_light};
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_18_medium: css`
  ${gotham_medium};
  font-size: 18px;
  line-height: 22px;
  color: ${colors.black};

`,
    gotham_white_45_medium: css`
  ${gotham_medium};
  font-size: 45px;
  line-height: 53px;
  color: ${colors.white};

`,
    gotham_white_32_medium: css`
  ${gotham_medium};
  font-size: 32px;
  line-height: 37px;
  color: ${colors.white};

`,
    gotham_white_22_medium: css`
  ${gotham_medium};
  font-size: 22px;
  line-height: 27px;
  color: ${colors.white};

`,
    gotham_white_1dot2vw: css`
  ${gotham_light};
  font-size: 1.2vw;
  line-height: 1.5vw;
   text-align: left;
  color: ${colors.white};

`,
    gotham_white_1dot2vw_medium: css`
  ${gotham_medium};
  font-size: 1.2vw;
  line-height: 1.5vw;
   text-align: left;
  color: ${colors.white};

`,
    gotham_white_1vw: css`
  ${gotham_light};
  font-size: 1vw;
  line-height: 1.2vw;
   text-align: left;
  color: ${colors.white};

`,
    gotham_white_1vw_medium: css`
  ${gotham_medium};
  font-size: 1vw;
  line-height: 1.2vw;
   text-align: left;
  color: ${colors.white};

`,
    gotham_white_18: css`
  ${gotham_light};
  font-size: 18px;
  line-height: 22px;
   text-align: left;
  color: ${colors.white};

`,
    gotham_black_24_medium: css`
  ${gotham_medium};
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_26_medium: css`
  ${gotham_medium};
  font-size: 26px;
  line-height: 32px;
  text-align: left;
  color: ${colors.black};

`,
    gotham_black_26: css`
  ${gotham_light};
  font-size: 26px;
  line-height: 32px;
  text-align: left;
  color: ${colors.black};

`,

    //==============

    roboto_white_64: css`
  ${roboto};
  font-size: 55px;
  line-height: 64px;
  color: ${colors.white};
`,
    roboto_white_36: css`
  ${roboto};
  font-size: 36px;
  line-height: 42px;
  color: ${colors.white};
`,
    roboto_white_20: css`
  ${roboto};
  font-size: 20px;
  line-height: 23px;
  color: ${colors.white};
`,
    roboto_black_30: css`
  ${roboto};
  font-size: 30px;
  line-height: 35px;
  font-weight: 300;
  color: ${colors.black};
`,
    roboto_black_30_bold: css`
  ${roboto};
  font-size: 30px;
  line-height: 35px;
  font-weight: 500;
  color: ${colors.black};
`,
    roboto_black_22: css`
  ${roboto};
  font-size: 22px;
  line-height: 26px;
  font-weight: 300;
  color: ${colors.black};
`,
    roboto_black_22_bold: css`
  ${roboto};
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: ${colors.black};
`,
    roboto_black_20: css`
  ${roboto};
  font-size: 20px;
  line-height: 23px;
  color: ${colors.black};
`,
    roboto_black_18: css`
  ${roboto};
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  color: ${colors.black};
`,
    roboto_black_18_bold: css`
  ${roboto};
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  color: ${colors.black};
`,
    roboto_white_24: css`
  ${roboto};
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: ${colors.white};
`,
    roboto_white_16: css`
  ${roboto};
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: ${colors.white};
`,
    roboto_white_15: css`
  ${roboto};
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: ${colors.white};
`

}

export const mainPadding = css`
padding-left:  170px;
padding-right:  170px;
@media(max-width: 1280px){
  padding-left: 110px;
  padding-right: 110px;
}
@media(max-width: 768px){
  padding-left: 60px;
  padding-right:60px;
}
@media(max-width: 375px){
  padding-left: 24px;
  padding-right:24px;
}
`
