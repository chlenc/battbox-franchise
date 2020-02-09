/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";

const Title = styled.div`
${fonts.block_small_title};
margin-bottom: 120px;

@media(max-width: 1280px){
  margin-bottom: 98px;
}
@media(max-width: 768px){
  margin-bottom: 45px;
}
`

const Root = styled.div`
${mainPadding};
padding-bottom: 86px;
@media(max-width: 1280px){
}
@media(max-width: 768px){
padding-bottom: 0;
}
`;
const Row = styled.div`
display: flex;
justify-content: space-around;
padding-bottom: 92px;
margin: 0 -20px;
& > * {margin: 0 20px;}
@media(max-width: 768px){
  padding-bottom: 64px;
  & > * {margin: 0 10px;}
  margin: 0 -10px;
}
`;

const Subtitle = styled.div`
${gotham_bold};
color: ${colors.white};
font-size: 26px;
line-height: 32px;
@media(max-width: 768px){
font-size: 18px;
line-height: 22px;
}
`

const Text = styled.div`
${gotham};
color: ${colors.white};
font-size: 22px;
line-height: 27px;
@media(max-width: 768px){
font-size: 14px;
line-height: 18px;
}
`

const Item = styled.div`
display: flex;
flex-direction: column;
max-width: 425px;
@media(max-width: 768px){
  max-width: 250px;
}
`


export default class Necessary extends React.Component {
    render() {
        return <Root>
            <Title>Что необходимо для старта?</Title>
            <Row css={css`@media(max-width: 768px){flex-direction: row-reverse}`}>
                <Item>
                    <Subtitle>Юр. лицо<br/><br/></Subtitle>
                    <Text>Мы работаем только с юр. лицами и можем помочь в оформлении</Text>
                </Item>
                <Item>
                    <Subtitle>SIM карты<br/><br/></Subtitle>
                    <Text>Для станций BattBox - это залог автономной работы сервиса</Text>
                </Item>
            </Row>
            <Row>
                <Item>
                    <Subtitle>Аллокация<br/><br/></Subtitle>
                    <Text>Вам нужен один сотрудник (студент) на 150 станций для осуществления баланса количества
                        зарядок</Text>
                </Item>
                <Item>
                    <Subtitle>Понимание<br/><br/></Subtitle>
                    <Text>Мы хотим узнать о вас немного больше, чтобы быть уверенными в вашем успехе</Text>
                </Item>
            </Row>
        </Root>;
    }
}
