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

const gotham = css`
font-family: GothamPro;
font-style: normal;
font-weight: normal;
`;
export const gotham_medium = css`
font-family: GothamPro-Medium;
font-style: normal;
font-weight: normal;
`;
export const gotham_bold = css`
font-family: GothamPro-Bold;
font-style: normal;
font-weight: normal;
`;
export const gotham_light = css`
font-family: GothamPro-Light;
font-style: normal;
font-weight: normal;
`;
export const roboto = css`
font-family: Roboto;
font-style: normal;
font-weight: normal;
`;


export const fonts = {
    gotham_white_120: css`
  ${gotham_light};
  font-size: 120px;
  line-height: 146px;
  text-align: center;
  color: ${colors.white};
`,
    gotham_white_72: css`
    ${gotham_light};
    font-size: 72px;
    line-height: 88px;
    text-align: center;
  color: ${colors.white};
`,
    gotham_white_34: css`
    ${gotham_light};
    font-size: 34px;
    line-height: 41px;
    text-align: center;
  color: ${colors.white};
`,
    gotham_black_45_bold: css`
  ${gotham_bold};
  font-weight: 900;
  font-size: 45px;
  line-height: 55px;
  text-align: center;
  color: ${colors.black};

`,
    //==============

    roboto_white_64: css`
  ${roboto};
  font-size: 55px;
  line-height: 64px;
  text-align: center;
  color: ${colors.white};
`,
    roboto_white_36: css`
  ${roboto};
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${colors.white};
`,
    roboto_white_20: css`
  ${roboto};
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: ${colors.white};
`

}

