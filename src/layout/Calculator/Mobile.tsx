/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding, roboto} from "@src/vars";
import {css, jsx} from "@emotion/core";
import GetContactField from "@src/Components/GetContactsField";
import Slider from 'rc-slider';
import Tooltip from "rc-tooltip";
import {FormInput} from "@src/layout/Calculator/Desctop";
import Select from '@src/Components/Select';
import {Option} from 'rc-select';
import {max, min} from "@src/layout/Calculator/index";
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
padding-bottom: 70px;
display: flex;
flex-direction: column;
`;

const Title = styled.div`
${fonts.block_title};
${mainPadding};
`

const Body = styled.div`
margin: 24px 8px 0 8px;
background: #000000;
border-radius: 15px;
padding: 16px 18px;
& > * {
margin: 16px 0;
}
`

const CalculatorTitle = styled.div`
${gotham_bold};
font-size: 20px;
line-height: 24px;
color: #15E9E9;
`

const CalculatorBlock = styled.div`
background: #202125;
border-radius: 13px;
padding: 12px 16px;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

const CalculatorBlockTitle = styled.div`
${gotham};
font-size: 18px;
line-height: 22px;
color: #848484;
padding-bottom: 8px;
`

const inputStyle = css`
  min-height: 40px;
  flex:1;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
`

const Description = styled.div`
${gotham};
font-size: 12px;
line-height: 15px;
color: #7C7C7C;
padding-bottom: 16px;

b{
${gotham_bold}
}
`

const Item = styled.div`
display: flex;
flex-direction: column;
margin: -5px 0;
& > * {margin: 5px 0;}
padding-bottom: 16px;
`

const ItemTitle = styled.div`
${gotham};
font-size: 30px;
line-height: 37px;
color: #15E9E9;
`

const ItemText = styled.div`
${gotham};
font-size: 18px;
line-height: 22px;
color: #C2C2C2;

`

const Text = styled.div`
${fonts.block_text}
`


export default class Mobile extends React.Component {
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
        const res = (cityMap as { city: string, count: number }[]).find(({city}) => city === selectedCity);
        res && this.setState({stantions: res.count})
    }

    render() {
        const {stantions, isError} = this.state;
        return <Root>
            <Title>Кальулятор окупаемости</Title>
            <Body>
                <CalculatorTitle>Рассчет тарифа Black</CalculatorTitle>
                <CalculatorBlock>
                    <Row>
                        <CalculatorBlockTitle>Ваш город</CalculatorBlockTitle>
                        <Select css={css`width: 100%;`} onChange={this.onChangeCity}>
                            {Object.values(cityMap).map(({city, count}, k) =>
                                <Option key={k} value={city}>{city}</Option>)
                            }
                        </Select>
                    </Row>
                    <Row>
                        <CalculatorBlockTitle>Количество станций</CalculatorBlockTitle>
                        <FormInput css={[inputStyle, css`width: calc(100% - 36px);padding-left: 36px;border-color: ${isError ? '#FF0000' : 'transparent'}`]}
                                   value={stantions === 0 ? '' : stantions}
                                   onChange={(e) => this.onChangeStantions(e.target.value)}
                                   type="number"/>
                    </Row>
                    <Slider css={css`margin: 65px 0 30px 0`} value={stantions}
                            onChange={this.onChangeStantions}
                            min={10}
                            max={300}
                            marks={{10: 10, 300: 300}}
                            step={1}
                            handle={handle}/>
                    <Description>Данное количество станций <b>рекомендованно</b> для создания комфортного уровня
                        сервиса, а также оптимального соотношения показателей доход/расход. </Description>
                </CalculatorBlock>
                <CalculatorBlock>
                    <Item>
                        <ItemTitle>{ceil(calculateInvestments(stantions)) + ' Р.'}</ItemTitle>
                        <ItemText>Требуемые инвестиции</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>{ceil(profitInYear(stantions)) + ' Р.'}</ItemTitle>
                        <ItemText>Прибыль через год </ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>{ceil(calculateMonthlyRevenue(stantions)) + ' Р.'}</ItemTitle>
                        <ItemText>Выручка в месяц</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>{ceil(paybackPeriod(stantions)) + ' мес'}</ItemTitle>
                        <ItemText>Срок окупаемости</ItemText>
                    </Item>

                </CalculatorBlock>
                <CalculatorTitle css={css`padding: 16px 0 ; color: white`}>Подробный рассчет</CalculatorTitle>
                <Text css={css`padding-bottom: 36px`}>Данный калькулятор основан на теоретической модели в г.
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
