/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import icn1 from './icn1.svg'
import icn2 from './icn2.svg'
import icn3 from './icn3.svg'
import icn4 from './icn4.svg'
import icn5 from './icn5.svg'
import icn6 from './icn6.svg'
import bigArrow from './bigArrow.svg'
import lilArrow from './lilArrow.svg'
import ScrollBar from 'react-perfect-scrollbar'
import {ScrollPlaceholder} from "@src/layout/Network";

const Root = styled.div`
background: ${colors.gray};
${mainPadding};
padding-bottom: 240px;

@media(max-width: 1280px){
padding-bottom: 150px;
}

@media(max-width: 768px){
padding-bottom: 64px;
}
`

const Title = styled.div`
${fonts.block_title};
white-space: nowrap;
`

const Item = styled.div`
display: flex;
flex-direction: column;
width: 140px;
@media(max-width: 1280px){
   width: 124px;
}
`

export const Icon = styled.div`
    width: 140px;
    height: 140px;
    margin-bottom: 40px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position:  center;
    background-size: contain;
    @media(max-width: 1280px){
        width: 124px;
        height: 124px;
        margin-bottom: 25px;
    }
`

const Container = styled.div`
display: flex;
justify-content: space-between;
//overflow-x: scroll;

padding-top: 85px;
padding-bottom: 171px;

margin: 0 -60px;
& > * {margin: 0 60px;}

@media(max-width: 1280px){
padding-top: 75px;
padding-bottom: 124px;
margin: 0 -32px;
& > * {margin: 0 32px;}
}

@media(max-width: 768px){
padding-top: 35px;
padding-bottom: 48px;
margin: 0 -15px;
& > * {margin: 0 15px;}
}

`

const Text = styled.div`
${fonts.block_text};
`

const NotIncludedRoot = styled.div`
display: flex;
@media(max-width: 768px){
flex-direction: column;
}
`

const NotIncludedTitle = styled.div`
display: flex;
flex-direction: column; 
padding-right: 116px; 
position: relative;
@media(max-width: 768px){
padding-bottom: 45px;
}

`

const notIncludedIconStyle = css`
position: absolute;
right: 40px; 
top: 30%;
width:222px;
height:93px;
background-image: url(${bigArrow});
@media(max-width: 768px){
  background-image: url(${lilArrow});
  width:57px;
  height:63px;
  top: 20px;
  left: 50%;
}
`



export default class WeGive extends React.Component {

    render() {

        return <Root>
            <Title>Мы даем:</Title>
            <ScrollBar>
                <Container>
                    <Item>
                        <Icon css={css`background-image: url(${icn1})`}/>
                        <Text>Консультацию и опыт</Text>
                    </Item>
                    <Item>
                        <Icon css={css`background-image: url(${icn2})`}/>
                        <Text>Приложение для iOS/Android</Text>
                    </Item>
                    <Item>
                        <Icon css={css`background-image: url(${icn3})`}/>
                        <Text>Наличие зарядок в сети</Text>
                    </Item>
                    <Item>
                        <Icon css={css`background-image: url(${icn4})`}/>
                        <Text>Административную платформу</Text>
                    </Item>
                    <Item>
                        <Icon css={css`background-image: url(${icn5})`}/>
                        <Text>Клиентскую поддержку 24/7</Text>
                    </Item>
                    <Item>
                        <Icon css={css`background-image: url(${icn6})`}/>
                        <Text>Эквайринг</Text>
                    </Item>
                </Container>
            </ScrollBar>
            <ScrollPlaceholder/>
            <NotIncludedRoot>
                <NotIncludedTitle>
                    <Title>Не включено</Title>
                    <Icon css={notIncludedIconStyle}/>

                </NotIncludedTitle>

                <Text css={css`max-width: 644px`}>
                    Услуги по доставке оборудования в ваш город<br/><br/>
                    Брендирование power bank по желанию франчайзи
                    (в случае, если у вас уже есть рекламодатель)<br/><br/>
                    Эксплуатационные расходы на интернет связь<br/><br/>
                    Поддержание работособности и чистоты станций<br/><br/>
                </Text>
            </NotIncludedRoot>
        </Root>
    }
}


