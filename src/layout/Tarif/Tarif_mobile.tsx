/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import ScrollBar from 'react-perfect-scrollbar'

import Question from "@src/Components/Question";
import black from './black.svg'
import simple from './simple.svg'
import gold from './gold.svg'

const Root = styled.div`
background: ${colors.gray};
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
padding-bottom: 42px;
${mainPadding};

`

const Subtitle = styled.div`
${fonts.block_text};
${mainPadding};
color: #949494;
padding-bottom: 54px;
letter-spacing: -0.1px;
`

const Items = styled.div`
  display: flex;
`

const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-bottom: 40px;
margin: -4px 0;
& > *{
  margin: 4px 0;
}
`

const Info = () => <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15.5 0.320007C7.12414 0.320007 0.320007 7.12414 0.320007 15.5C0.320007 23.8759 7.12414 30.68 15.5 30.68C23.8759 30.68 30.68 23.8759 30.68 15.5C30.68 7.12414 23.8759 0.320007 15.5 0.320007ZM15.5 1.64001C23.1625 1.64001 29.36 7.83752 29.36 15.5C29.36 23.1625 23.1625 29.36 15.5 29.36C7.83752 29.36 1.64001 23.1625 1.64001 15.5C1.64001 7.83752 7.83752 1.64001 15.5 1.64001ZM15.5 6.26001C14.9749 6.26001 14.4713 6.46861 14.0999 6.83994C13.7286 7.21126 13.52 7.71488 13.52 8.24001C13.52 8.76514 13.7286 9.26876 14.0999 9.64008C14.4713 10.0114 14.9749 10.22 15.5 10.22C16.0251 10.22 16.5288 10.0114 16.9001 9.64008C17.2714 9.26876 17.48 8.76514 17.48 8.24001C17.48 7.71488 17.2714 7.21126 16.9001 6.83994C16.5288 6.46861 16.0251 6.26001 15.5 6.26001ZM12.86 12.86V14.18H13.52H14.18V22.76H13.52H12.86V24.08H13.52H14.18H16.82H17.48H18.14V22.76H17.48H16.82V12.86H16.16H13.52H12.86Z"
        fill="#15E9E9"/>
</svg>

const Text = styled.div`
${fonts.block_text};
font-size: 12px !important;
line-height: 12px !important;
width: 150px;
height: 24px;
display: flex;
align-items: center;
`

const TarifImg = styled.img`
width: 100%;
height: auto;
`

const TextItem = () => <Item>
    <Text>Один комплект оборудования</Text>
    <Text>Доступ в личный кабинет</Text>
    <Text>Инструкция по развитию бизнеса</Text>
    <Text>Гарантия на станцию</Text>
    <Text>Эксклюзив</Text>
    <Text>Страховка power bank</Text>
    <Text>Консультация в нерабочее время</Text>
</Item>

export const Tarif_mobile = () =>
    <Root>
        <Title css={css`display: flex;`}>Тарификация одной станции <Info/></Title>
        <Subtitle>Вы можете выбрать наиболее подходящий вам тариф и сообщить об этом менеджеру</Subtitle>
        <ScrollBar options={{suppressScrollY: true}}>
            <Items>
                <TarifImg src={black} alt="black"/>
                <TextItem/>
                <TarifImg src={simple} alt="simple"/>
                <TextItem/>
                <TarifImg src={gold} alt="gold"/>
            </Items>
        </ScrollBar>
    </Root>


export default Tarif_mobile
