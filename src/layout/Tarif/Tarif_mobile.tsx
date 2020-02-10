/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import ScrollBar from 'react-perfect-scrollbar'

import black from './black.svg'
import simple from './simple.svg'
import gold from './gold.svg'
import Info from "@src/Components/Info";

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

const InfoTextRoot = styled.div`
font-size: 15px;
line-height: 18px;
color: #000000;
width: 270px;
opacity: 1;
${gotham};
b{
  ${gotham_bold};
  line-height: 30px;
}
`

const infoText = <InfoTextRoot>
    <b>Один комплект оборудования</b><br/>
    В комплект входит станция
    и 6 power bank. Дополнительные зарядки вы можете приобрести отдельно.
    <br/><br/>
    <b>Эксклюзив</b><br/>
    Вы становитесь единственным представителем в городе или регионе, а также получаете право продажи оборудования и работы
    с суб-франчайзи. Подробнее узнавайте у менеджера
    <br/><br/>
    <b>Страховка</b><br/>
    Если количество ваших power bank в сети уменьшится на 15%
    от первоначального, мы вышлем вам новые бесплатно! Страховка действует 1 год и может быть продлена.<br/>

</InfoTextRoot>

export const Tarif_mobile = () =>
    <Root>
        <Title css={css`display: flex;justify-content: space-between;`}>Тарификация одной станции <Info text={infoText}/></Title>
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
