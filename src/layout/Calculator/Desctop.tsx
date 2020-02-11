/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import GetContactField from "@src/Components/GetContactsField";
import Slider from 'rc-slider';
import Tooltip from "rc-tooltip";
import { max, min} from "@src/layout/Calculator/index";
import Select from "@src/Components/Select";
import {Option} from 'rc-select';
import logo from '@src/assets/icons/logo.svg'

import {
    calculateInvestments,
    calculateMonthlyRevenue,
    ceil,
    paybackPeriod,
    profitInYear
} from "@src/layout/Calculator/logic";
const cityMap = require('./cityMap.json')
const Handle = Slider.Handle;

const Root = styled.div`
display: flex;
flex-direction: column;
${mainPadding};
padding-top: 11vw;
padding-bottom: 6vw;

`;

const Body = styled.div`
background: ${colors.black};
border-radius: 42px;
@media(max-width: 1280px){
  border-radius: 20px;
}
@media(max-width: 768px){
  border-radius: 15px;
}
padding: 3vw 4vw 5vw 4vw;
`

const Title = styled.div`
${fonts.block_title};
padding-bottom: 1.5vw;
@media(max-width: 768px){
  padding-bottom: 48px;
}
`

const Row = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
margin: 0 -0.7vw;
& > * {margin: 0 0.7vw;}

@media(max-width: 768px){
  flex-direction: column;
}
`

const CalculatorBlock = styled.div`
background: #202125;
padding: 2.6vw 2vw;
flex: 1;
display: flex;
flex-direction: column;
margin-bottom: 4vw;

border-radius: 26px;
@media(max-width: 768px){
  border-radius: 13px;
}
`

const CalculatorBlockTitle = styled.div`
${gotham};
font-size: 1.3vw;
line-height: 1.6vw;
color: #979797;
`

const CalculatorTitle = styled.div`
${fonts.block_title};
color: #15E9E9;

padding-bottom: 12px;

@media(min-width: 768px){
  font-size: 1.3vw !important;
  line-height: 1.6vw !important;
  padding-bottom: 2.5vw;
}
`

const Text = styled.div`
${fonts.block_text};
font-size: 1.2vw !important;
line-height:  1.4vw !important;
color: #7E7E7E;
`
const inputStyle = css`
height: 2.3vw;
border-radius: 44px;
background: rgb(47, 49, 54);
${gotham};
font-size: 1vw;
color: ${colors.white};
text-align: left;
outline: none;
box-shadow: none;
border: 1px solid rgb(47, 49, 54);
padding-left: 1.5vw;
`

export const FormInput = styled.input`
${inputStyle};
width: 9vw;
`

const Description = styled.div`
${gotham};
font-weight: 300;
font-size: 1vw;
line-height: 1.3vw;
color: #7C7C7C;
padding-top: 0.5vw;
b{
${gotham_bold}
}
`

const Item = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

const ItemTitle = styled.div`
${gotham};
font-size: 2vw;
line-height: 2.6vw;
color: #15E9E9;

`

const ItemText = styled.div`
${gotham};
font-size: 1vw;
line-height: 1.2vw;
color: #C2C2C2;


`


export default class Desktop extends React.Component {
    state = {
        stantions: 20,
        isError: false
    }

    onChangeStantions = (stantions: string | number) => {
        stantions = +stantions;
        let isError = false;
        if (isNaN(stantions) || stantions <= 0) stantions = 0;
        if (stantions >= max) stantions = max;
        if (stantions < 10) isError = true
        this.setState({stantions, isError})
    }

    onChangeCity = (selectedCity: string) => {
        const res = (cityMap as {city: string, count: number}[]).find(({city}) => city === selectedCity);
        res && this.setState({stantions: res.count})
    }

    render() {
        const {stantions, isError} = this.state;
        return <Root>
            <Title>Кальулятор окупаемости</Title>
            <Body>
                <Row css={css`align-items: center; padding-bottom: 1vw;`}>
                    <CalculatorTitle css={css`padding-bottom: 0 !important;`}>Рассчет тарифа Black</CalculatorTitle>
                    <Logo/>
                </Row>
                <Row>
                    <CalculatorBlock>
                        <Row css={css`align-items: center; margin-bottom: 2vw`}>
                            <CalculatorBlockTitle>Ваш город</CalculatorBlockTitle>
                            <Select css={css`width: 15vw;`} onChange={this.onChangeCity}>
                                {Object.values(cityMap).map(({city, count}, k) =>
                                    <Option key={k} value={city}>{city}</Option>)
                                }
                            </Select>
                        </Row>
                        <Row css={css`align-items: center; margin-bottom: 3vw`}>
                            <CalculatorBlockTitle>Количество станций</CalculatorBlockTitle>
                            <FormInput value={stantions === 0 ? '' : stantions}
                                       css={css`border-color: ${isError ? '#FF0000' : 'transparent'}`}
                                       onChange={(e) => this.onChangeStantions(e.target.value)}
                                       type="number"/>
                        </Row>
                        <Slider value={stantions}
                                onChange={this.onChangeStantions}
                                min={10}
                                max={300}
                                marks={{10: 10, 300: 300}}
                                step={1}
                                handle={handle}/>
                        <Description>Данное количество станций <b>рекомендованно</b> для создания комфортного уровня
                            сервиса, а также оптимального соотношения показателей доход/расход. </Description>
                    </CalculatorBlock>
                    <CalculatorBlock css={css`justify-content: space-between`}>
                        <Row css={css`align-items: flex-start`}>
                            <Item>
                                <ItemTitle>{ceil(calculateInvestments(stantions)) + ' Р.'}</ItemTitle>
                                <ItemText>Требуемые инвестиции</ItemText>
                            </Item>
                            <Item>
                                <ItemTitle>{ceil(profitInYear(stantions)) + ' Р.'}</ItemTitle>
                                <ItemText>Прибыль через год </ItemText>
                            </Item>
                        </Row>
                        <Row css={css`align-items: center`}>
                            <Item>
                                <ItemTitle>{ceil(calculateMonthlyRevenue(stantions)) + ' Р.'}</ItemTitle>
                                <ItemText>Выручка в месяц</ItemText>
                            </Item>
                            <Item>
                                <ItemTitle>{ceil(paybackPeriod(stantions)) + ' мес'}</ItemTitle>
                                <ItemText>Срок окупаемости</ItemText>
                            </Item>
                        </Row>

                    </CalculatorBlock>
                </Row>
                <CalculatorTitle css={css`padding-bottom: 1vw; color: white`}>Подробный рассчет</CalculatorTitle>
                <Text css={css`padding-bottom: 1.5vw`}>Данный калькулятор основан на теоретической модели в г.
                    Москве.<br/>
                    Более подробный калькулятор вы можете запросить у менеджера.</Text>
                <GetContactField title="Запросить" hideTitle darkTheme/>
            </Body>
        </Root>
    }
}

const handle = (props: any) => {
    const {value, dragging, index, ...restProps} = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

const Logo =  styled.div`
width: 7vw;
height: 3vw;
background: url(${logo}) center no-repeat;
background-size: contain;
@media(max-width: 768px){
 display: none
 }
`
