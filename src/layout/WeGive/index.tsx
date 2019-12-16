/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { fonts } from "@src/vars";
import { css, jsx } from "@emotion/core";
import {
    Arrow,
    Icn1,
    Icn1m,
    Icn2,
    Icn2m,
    Icn3,
    Icn3m,
    Icn4,
    Icn4m,
    Icn5,
    Icn5m,
    Icn6,
    Icn6m,
    Icn7, Icn7m, SmallArrow
} from "@src/layout/WeGive/icons";


const Root = styled.div`
  padding: 74px 14vw 40px 14vw;
  @media(max-width: 1800px){ padding: 74px 10vw 40px 10vw;} 
  @media(max-width: 1500px){ padding: 74px 5vw 40px 5vw;} 
  @media(max-width: 1000px){ padding: 74px 15vw 40px 15vw;} 
  @media(max-width: 800px){ padding: 74px 10vw 40px 10vw;} 
  @media(max-width: 600px){ padding: 74px 5vw 40px 5vw;} 
`

const Title = styled.div`
${fonts.gotham_black_45_medium};
margin-bottom: 60px;
@media(max-width: 1280px){${fonts.gotham_black_32_medium};}
@media(max-width: 768px){${fonts.gotham_black_22_medium};}
`
const Text = styled.div`
${fonts.gotham_black_24_medium};
width: 200px;
@media(max-width: 1280px){${fonts.gotham_black_18_medium};width: 100px;}
@media(max-width: 1000px){width: 180px;}
margin-top: 35px;
white-space: nowrap;
text-align: left!important;
`

const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 140px;
@media(max-width: 1000px){
  flex-direction: column;
  margin-bottom: 0;
} 

`

const D = styled.div`
display: flex;
flex-direction: column;
@media(max-width: 1000px){
  display: none;
}`
const M = styled.div`
position: relative;
flex-direction: column;
display: none;
align-items: center;
width: 100%;
@media(max-width: 1000px){
display: flex;
}
`

const SmallText = styled.div`
${fonts.gotham_black_22};
@media(max-width: 1280px){${fonts.gotham_black_18};}
@media(max-width: 1000px){${fonts.gotham_black_15};margin-top: 50px}
 
`;

const texts = {
    consultation: <Text>Консультацию <br/>и опыт</Text>,
    application: <Text>Приложение <br/>для iOS/Android</Text>,
    network: <Text>Наличие <br/>зарядок в сети</Text>,
    admin: <Text>Административную <br/>платформу</Text>,
    support: <Text>Клиентскую <br/>поддержку24/7</Text>,
    acquire: <Text>Эквайринг</Text>
}

export default class WeGive extends React.Component {

    render() {

        return <Root>
            <Title>Мы даем:</Title>

            <D>
                <Row>
                    <Icn1 text={texts.consultation}/>
                    <Icn3 text={texts.application}/>
                    <Icn5 text={texts.network}/>
                </Row>
            </D>
            <M>
                <Row>
                    <Icn1m text={texts.consultation}/>
                    <Icn2m text={texts.application}/>
                    <Icn3m text={texts.network}/>
                </Row>
            </M>
            <D>
                <Row>
                    <Icn2 text={texts.admin}/>
                    <Icn4 text={texts.support}/>
                    <Icn6 text={texts.acquire}/>
                </Row>
            </D>
            <M>
                <Row>
                    <Icn4m text={texts.admin}/>
                    <Icn5m text={texts.support}/>
                    <Icn6m text={texts.acquire}/>
                </Row>
            </M>
            <Row css={css`justify-content: flex-start; display: flex!important;`}>
                <D css={css`flex-direction: row;align-items: baseline;`}>
                    <Icn7 text={<Text css={css`text-decoration: underline`}>Не включено</Text>}/>
                    <Arrow/>
                </D>
                <M>
                    <Icn7m text={<Text css={css`text-decoration: underline`}>Не включено</Text>}/>
                    <SmallArrow/>
                </M>
                <SmallText>
                    услуги по доставке оборудования в ваш город<br/><br/>
                    брендирование power bank по желанию франчайзинга<br/>
                    <small>(в случае, если у вас уже есть рекламодатель)</small><br/><br/>
                    эксплуатационные расходы на интернет связь<br/><br/>
                    поддержание работособности и чистоты станций
                </SmallText>
            </Row>
        </Root>
    }
}


