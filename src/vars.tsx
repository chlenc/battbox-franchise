import { css } from "@emotion/core";
//colors

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    aqua: '#15E9E9',
    aquaDisabled: '#10B8B8',
    disabld: '#F3F3F3',
    bgDark: '#1A1A1A',
}


export const fonts = {
    proxima_white_120: css`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 300;
  font-size: 120px;
  line-height: 146px;
  text-align: center;
  color: ${colors.white};
`,
    roboto_white_64: css`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 64px;
  text-align: center;
  color: ${colors.white};
`,
    proxima_black_45_bold: css`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  text-align: center;
  color: ${colors.black};

`

}

