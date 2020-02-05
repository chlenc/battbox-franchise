/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import icn1 from './icn1.svg'
import icn2 from './icn2.svg'
import icn3 from './icn3.svg'
import icn4 from './icn4.svg'


const Root = styled.div`
background: ${colors.gray};
${mainPadding};
padding-bottom: 240px;
padding-top: 48px;

@media(max-width: 1280px){
padding-bottom: 150px;
}

@media(max-width: 768px){
padding-bottom: 128px;
}
`

const Title = styled.div`
${fonts.block_title};
`

const Item = styled.div`
display: flex;
flex-direction: column;
width: 215px;
@media(max-width: 1280px){
   width: 165px;
}
`

const Icon = styled.div`
    width: 215px;
    height: 215px;
    margin-bottom: 40px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position:  center;
    background-size: contain;
    @media(max-width: 1280px){
        width: 165px;
        height: 165px;
        margin-bottom: 25px;
    }
`
const Container = styled.div`
display: flex;
justify-content: space-between;
overflow-x: scroll;

padding-top: 85px;
padding-bottom: 171px;

margin: 0 -60px;
& > * {margin: 0 60px;}

@media(max-width: 1280px){
padding-top: 75px;
padding-bottom: 165px;
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

const TextTitle = styled.div`
${fonts.block_about_title};
`

const Text = styled.div`
${fonts.block_text};
`

const ScrollPlaceholder = () =>  <svg
    css={css`
    display: none;
    @media(max-width: 768px){
    display: block;
    padding-bottom: 85px;
    }
    `}
    width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="8" rx="4" fill="#01FFFF"/>
</svg>

export default class Network extends React.Component {

    render() {

        return <Root>
            <Title>Крупнейшая сеть пауршеринга в России</Title>
            <Container>
                <Item>
                    <Icon css={css`background-image: url(${icn1})`}/>
                    <TextTitle>23 000</TextTitle>
                    <Text>Клиентов</Text>
                </Item>
                <Item>
                    <Icon css={css`background-image: url(${icn2})`}/>
                    <TextTitle>100 000 + </TextTitle>
                    <Text>Аренд</Text>
                </Item>
                <Item>
                    <Icon css={css`background-image: url(${icn3})`}/>
                    <TextTitle>500 + </TextTitle>
                    <Text>Партнеров</Text>
                </Item>
                <Item>
                    <Icon css={css`background-image: url(${icn4})`}/>
                    <TextTitle>94 рубля </TextTitle>
                    <Text>Средний чек</Text>
                </Item>
            </Container>
            <ScrollPlaceholder/>
        </Root>
    }
}


