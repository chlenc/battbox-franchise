/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import GetContactField from "@src/Components/GetContactsField";

const Root = styled.div`
${mainPadding};
padding-top: 120px;
padding-bottom: 132px;
background: ${colors.white};
@media(max-width: 1400px){
  padding-left: 110px;
  padding-right: 110px;
}
@media(max-width: 1280px){
    padding-top: 90px;
    padding-bottom: 100px;
}
@media(max-width: 460px){
    padding: 36px 24px 64px 24px;
}
`;

const Title = styled.div`
${fonts.block_title};
color: ${colors.black};
margin-bottom: 16px;

//@media(max-width: 1280px){
//  margin-bottom: 98px;
//}
//@media(max-width: 768px){
//  margin-bottom: 45px;
//}
`

const Subtitle = styled.div`
${fonts.block_text};
color: #323232;
margin-bottom: 48px;
@media(max-width: 768px){
}
`

const Row = styled.div`
display: flex;
justify-content: space-between;
margin: 0 -20px;
padding-bottom: 40px;
& > * {margin: 0 20px;}
@media(max-width: 1670px){
  & > * {margin: 0 10px;}
  margin: 0 -10px;
  padding-bottom: 20px
}
@media(max-width: 1060px){
    flex-direction: column;
    align-items: center;
    padding-bottom: 0
}
@media(max-width: 768px){
  & > * {margin: 0 10px;}
  margin: 0 -10px;
}
`;

const ItemRoot = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 38px;
background: #202125;
border-radius: 13px;
flex: 1;
max-width: 500px;
height: 210px;
@media(max-width: 1670px){
  height: 160px;
  padding: 12px 22px;
}
@media(max-width: 1060px){
    width: calc(100% - 64px);
    margin-bottom: 20px;
}
`

const ItemRow = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
`

const ItemPrice = styled.div`
${gotham};
font-size: 24px;
line-height: 29px;
color: #8D8D8D;
@media(max-width: 1670px){
  font-size: 20px;
  line-height: 25px
}
`
const ItemCount = styled.div`
${gotham_bold};
font-size: 72px;
line-height: 88px;
color: #15E9E9;
@media(max-width: 1670px){
  font-size: 40px;
  line-height: 40px
}
`
const ItemCity = styled.div`
${gotham_bold};
color: #FFFFFF;
font-size: 30px;
line-height: 82px;
@media(max-width: 1670px){
  font-size: 22px;
  line-height: 60px
}
`


const Item: React.FC<{ city?: string, count?: string, price?: string }> =
    ({city, count, price}) =>
        <ItemRoot>
            <ItemCity>{city}</ItemCity>
            <ItemRow>
                <ItemCount>{count}</ItemCount>
                <ItemPrice>{price}</ItemPrice>
            </ItemRow>
        </ItemRoot>

export default class Necessary extends React.Component {
    render() {
        return <Root>
            <Title>Топ-6 свободных городов для открытия франшизы</Title>
            <Subtitle>Указано количество станций и стоимость, необходимые для получения эксклюзива и оптимального
                соотношения расход/доход</Subtitle>
            <Row>
                <Item city="Санкт-Петербург" count="200" price="10 000 000 Р."/>
                <Item city="Краснодарский край" count="100" price="5 000 000 Р."/>
                <Item city="Казань" count="80" price="4 000 000 Р."/>
            </Row>
            <Row>
                <Item city="Екатеринбург" count="100" price="5 000 000 Р."/>
                <Item city="Новосибирск" count="70" price="3 500 000 Р."/>
                <Item city="Нижний Новгород" count="60" price="3 000 000 Р."/>
            </Row>
            <Title css={css`padding-top: 92px; @media(max-width: 1060px){padding-top: 46px;}`}>Ваши контакты для
                связи</Title>
            <GetContactField btnText="Добавить"/>

        </Root>;
    }
}
