import { css } from "@emotion/core";
import GothamPro from "@src/assets/font/GothamPro.woff";
import GothamPro_Medium from "@src/assets/font/GothamPro-Medium.woff";
import GothamPro_Light from "@src/assets/font/GothamPro-Light.woff";
import GothamPro_Bold from "@src/assets/font/GothamPro-Bold.woff";
import { injectGlobal } from 'emotion';

injectGlobal`
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
    aquaDisabled: '#10B8B8',
    disabld: '#F3F3F3',
    bgDark: '#1A1A1A',
};

const fontTemplate = css`
font-style: normal;
font-weight: normal;
text-align: center;
z-index: 2;
`;

const gotham = css`
font-family: GothamPro;
${fontTemplate};
`;
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
export const roboto = css`
font-family: Roboto;
${fontTemplate};
`;


export const fonts = {
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
    gotham_black_22_medium: css`
  ${gotham_medium};
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
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
`

}

