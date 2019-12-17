/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { css, jsx } from "@emotion/core";

const Title = styled.div`
${fonts.gotham_black_45_medium};
margin-bottom: 117px;
color:${colors.white};

@media(max-width: 1280px){
  ${fonts.gotham_black_32_medium};
  color:${colors.white}
  margin-bottom: 50px;
}

@media(max-width: 768px){
  ${fonts.gotham_white_22_medium};
  margin-bottom: 45px;
}

`

const Root = styled.div`
padding: 105px 20vw 65px 20vw;
background-color: ${colors.bgDark};
opacity: 0.9;

@media(max-width: 1280px){
  padding: 64px 15vw 64px 15vw;
}
@media(max-width: 768px){
  padding: 35px 10vw 0 10vw;
  background-color: ${colors.bgDark};
  opacity: 1;
}
//@media(max-width: 550px){  padding: 35px 4vw 0 4vw;}
`;
const Row = styled.div`
display: flex;
justify-content: space-between;

& > :last-child{
margin-left: 30px;
}
`;

const Text = styled.div`
max-width: 460px;
${fonts.gotham_black_26};
color:${colors.white};
b{
  ${fonts.gotham_black_26_medium};
  color:${colors.white}
};
padding-bottom: 155px;

@media(max-width: 1280px){
  max-width: 365px;
  padding-bottom: 110px;
  ${fonts.gotham_black_22};
color:${colors.white};
b{
  ${fonts.gotham_black_22_medium};
  color:${colors.white}
};

@media(max-width: 768px){
  max-width: 365px;
  padding-bottom: 40px;
  ${fonts.gotham_white_18};
b{
  ${fonts.gotham_white_18_medium};
};

}
`;

const revertedRowStyle = css`
@media(max-width: 768px){
  flex-direction: row-reverse;
  & > :last-child{
    margin-left: 0;
    margin-right: 30px;
  }
}
`

export default class Necessary extends React.Component {
    render() {
        return <Root>
            <Title>Что необходимо для старта?</Title>
            <Row css={revertedRowStyle}>
                <Text>
                    <b>Юр.лицо</b>
                    <br/><br/>Мы работаем только с юр. Лицами и можем помочь в оформлении
                </Text>
                <Text>
                    <b>SIM карты</b>
                    <br/><br/>Для станций BattBox - это залог автономной работы сервиса
                </Text>
            </Row>
            <Row>
                <Text>
                    <b>Аллокация</b>
                    <br/><br/>Вам нужен один сотрудник (студент) на 150 станций для осуществления баланса количества зарядок
                </Text>
                <Text>
                    <b>Понимание</b>
                    <br/><br/>Мы хотим узнать о вас немного больше, чтобы быть уверенными в вашем успехе
                </Text>
            </Row>
        </Root>;
    }
}
