/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import GetContactField from "@src/Components/GetContactsField";
import Slider from 'rc-slider';
import Tooltip from "rc-tooltip";
import {max, min} from "@src/layout/Calculator/index";
import Select from "@src/Components/Select";
import {Option} from 'rc-select';
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
border: none;
padding-left: 1.5vw;
`

export const FormInput = styled.input`
${inputStyle};
width: 9vw;
`

const Description = styled.div`
${gotham};
font-weight: 300;
font-size: 0.6vw;
line-height: 0.7vw;
color: #7C7C7C;
padding-top: 0.5vw;
`

const Item = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

const ItemTitle= styled.div`
${gotham};
font-size: 2vw;
line-height: 2.6vw;
color: #15E9E9;

`

const ItemText= styled.div`
${gotham};
font-size: 1vw;
line-height: 1.2vw;
color: #C2C2C2;


`



export default class Desktop extends React.Component{
    state = {
        stantions: 250
    }

    onChangeStantions = (stantions: string | number) => {
        if (typeof stantions === 'number') this.setState({stantions})
        else if (!isNaN(+stantions) && +stantions >= min && +stantions <= max) this.setState({stantions: +stantions})
    }

    render() {
        const {stantions} = this.state;
        return <Root>
            <Title>Кальулятор окупаемости</Title>
            <Body>
                <Row css={css`align-items: center;`}>
                    <CalculatorTitle>Тариф Black</CalculatorTitle>
                    <Logo/>
                </Row>
                <Row>
                    <CalculatorBlock>
                        <Row css={css`align-items: center; margin-bottom: 2vw`}>
                            <CalculatorBlockTitle>Ваш город</CalculatorBlockTitle>
                            <Select css={css`width: 15vw;`}>
                                <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                                <Option value="Самара">Самара</Option>
                                <Option value="Сахалин">Сахалин</Option>
                                <Option value="Саратов">Саратов</Option>
                            </Select>
                        </Row>
                        <Row css={css`align-items: center; margin-bottom: 3vw`}>
                            <CalculatorBlockTitle>Количество станций</CalculatorBlockTitle>
                            <FormInput value={stantions} onChange={(e) => this.onChangeStantions(e.target.value)}
                                       type="number"/>
                        </Row>
                        <Slider value={stantions}
                                onChange={this.onChangeStantions}
                                min={10}
                                max={300}
                                marks={{10: 10, 300: 300}}
                                step={1}
                                handle={handle}/>
                        <Description>Данное количество станций необходимо для создания комфортного уровня сервиса, также
                            для оптимального соотношения показателей доход/расход.</Description>
                    </CalculatorBlock>
                    <CalculatorBlock css={css`justify-content: space-between`}>
                        <Row css={css`align-items: flex-start`}>
                            <Item>
                                <ItemTitle>2 000 000 ₽</ItemTitle>
                                <ItemText>Требуемые инвестиции</ItemText>
                            </Item>
                            <Item>
                                <ItemTitle>1 000 000 ₽</ItemTitle>
                                <ItemText>Прибыль через год </ItemText>
                            </Item>
                        </Row>
                        <Row css={css`align-items: center`}>
                            <Item>
                                <ItemTitle>100 000 ₽</ItemTitle>
                                <ItemText>Выручка в месяц</ItemText>
                            </Item>
                            <Item>
                                <ItemTitle>6 мес</ItemTitle>
                                <ItemText>Срок окупаемости</ItemText>
                            </Item>
                        </Row>

                    </CalculatorBlock>
                </Row>
                <CalculatorTitle css={css`padding-bottom: 1vw; color: white`}>Подробный рассчет</CalculatorTitle>
                <Text css={css`padding-bottom: 1.5vw`}>Данный калькулятор основан на теоретической модели в г.
                    Москве.<br/>
                    Более подробный калькулятор вы можете запросить у менеджера</Text>
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

const Logo = () => <svg css={css`width: 7vw; @media(max-width: 768px){display: none}`} width="100" height="41" viewBox="0 0 100 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="100" height="40.4255" fill="url(#pattern0)"/>
    <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0" transform="translate(0.00104627) scale(0.00108601 0.00269542)"/>
        </pattern>
        <image id="image0" width="912" height="371"
               xlinkHref="data:image/png;base64,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"/>
    </defs>
</svg>
