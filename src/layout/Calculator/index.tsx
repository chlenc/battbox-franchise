/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts, roboto } from "@src/vars";
import { css, jsx } from "@emotion/core";
import InputField, { OutputField } from "@src/layout/Calculator/InputField";
import Button from "@src/Components/Button";
import { useWindowDimensions } from "@src/utils";


const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 117px;
`;

const CalcBodyWrapper = styled.div`
width: 45vw;
height: fit-content;
background-color: ${colors.white};
display: flex;
justify-content: center;
`;

const ResultBodyWrapper = styled.div`
width: 38vw;
height: fit-content;
background-color: ${colors.aqua};
display: flex;
justify-content: center;
`

const Title = styled.div`
${fonts.gotham_black_45_medium};
font-size: 2.3vw;
line-height: 2.5vw;

text-align: left;
width: 100%;
`

const CalcBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 3.5vw 4.7vw;
`;

const ResultBodyRoot = styled.div`
display: flex;
flex-direction: column;
padding: 3.4vw 3.1vw 4.7vw 3.1vw;
align-items: center;
width: 100%;
`;

const ResultBody: React.FC<{open?: boolean}> =({children, open}) => {
    const {  width } = useWindowDimensions();
    return (open || width > 768 ) ? <ResultBodyRoot>{children}</ResultBodyRoot> : null
};

const Description = styled.div`
${fonts.gotham_black_18};
font-size: 1vw;
line-height: 1.2vw;

text-align: left;
margin-bottom: 4vw;
`

const Divider = styled.div`
height: 25px;
@media(max-width: 1280px){
display: none;
}
`

const text = `Укажите предполагаемую месячную выручку от
размещения рекламных материалов на power bank
и в мобильном приложении в
 рублях)`


const UserDetailInput = styled.input`
background-color: ${colors.aquaDisabled};
border-radius: 4px;
height: 2.6vw;
border: none;
&::placeholder{
  ${roboto};
  color: ${colors.white};
  font-size: 0.9vw;
}

${roboto};
color: ${colors.white};
font-size: 0.9vw;
outline: none;
flex: 1;
`
const UserDetailWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 2.6vw;
`
const UserDetailRow = styled.div`
display: flex;
justify-content: space-between;
margin: -0.4vw;
flex: 1;
padding-bottom: 1vw;
& > * {
margin: 0.4vw;
}
`

interface IState {
    population: string,
    ml108: string
    ml3008: string
    additional: string
    hour: string,
    day: string,
    ad: string,
    cost: string,
    output: {}
}

export default class Calculator extends React.Component<{}, IState> {

    state = {
        population: '',
        ml108: '',
        ml3008: '',
        additional: '',
        hour: '',
        day: '',
        ad: '',
        cost:'',

        output: {}
    };

    updateInput = (v: string, f: string) => {
        v = v.replace(',', '.')
        if (isNaN(+v) || +v < 0) v = '';
        const input = this.state;
        this.setState({...input, [f]: v} as any)
    }


    render() {
        const {population, ml108, ml3008, additional, hour, day, ad, cost} = this.state;
        const profit = calcProfit(this.state);
        return <Root>
            <CalcBodyWrapper>
                <CalcBody>
                    <Title>Калькулятор окупаемости</Title>
                    <Description><br/>Данный калькулятор основан на теоретической модели в г. Москва. Более подробный
                        калькулятор вы можете запросить у менеджера</Description>
                    <InputField
                        text="Введите населенность вашего города:"
                        value={population}
                        onChange={(e) => this.updateInput(e.target.value, 'population')}
                    />
                    <Divider/>
                    <InputField
                        text="Кол-во станций на 10 слотов:"
                        value={ml108}
                        onChange={(e) => this.updateInput(e.target.value, 'ml108')}
                    />
                    <InputField
                        text="Кол-во станций на 30 слотов:"
                        value={ml3008}
                        onChange={(e) => this.updateInput(e.target.value, 'ml3008')}
                    />
                    <InputField
                        text="Дополнительные крепления:"
                        value={additional}
                        onChange={(e) => this.updateInput(e.target.value, 'additional')}
                        info={text}
                    />
                    <Divider/>
                    <InputField
                        text="Час:"
                        info={text}
                        value={hour}
                        onChange={(e) => this.updateInput(e.target.value, 'hour')}
                    />
                    <InputField
                        text="Сутки:"
                        info={text}
                        value={day}
                        onChange={(e) => this.updateInput(e.target.value, 'day')}
                    />
                    <Divider/>
                    <InputField
                        text="Монетизация с рекламы:"
                        info={text}
                        value={ad}
                        onChange={(e) => this.updateInput(e.target.value, 'ad')}
                    />
                    <InputField
                        text="Зарплата сотрудника на аллокацию:"
                        value={cost}
                        onChange={(e) => this.updateInput(e.target.value, 'cost')}

                    />
                    <br/>
                    <Button>Рассчитать</Button>
                </CalcBody>
            </CalcBodyWrapper>
            <ResultBodyWrapper>
                <ResultBody>
                    <Title>Результат</Title><br/><br/>
                    <OutputField text="❌Теоретический срок окупаемости:" value={23} dem={"месяца"} isTitle/>
                    <br/><br/><br/>
                    <OutputField text="❌Рекомендуемое количество станций для приобретения:" value={23000} dem={"шт."}/>
                    <OutputField text="Требуемые инвестиции в сеть:" value={calcInvestments(this.state)} dem={"₽"}/>
                    <OutputField text="Выручка от всей сети:" value={profit} dem={"₽/мес"}/>
                    <OutputField text="Комиссия BattBox:" value={calcCommission(profit)} dem={"₽/мес"}/>
                    <OutputField text="Расходы на сеть:" value={cost} dem={"₽/мес"}/>
                    <OutputField text="Выручка в год:" value={profit*365} dem={"₽"}/>
                    <br/><br/><br/><br/><br/>
                    <Title css={css`font-size: 1.9vw`}>Запросить подробный рассчет</Title><br/><br/>
                    <UserDetailWrapper>
                        <UserDetailRow>
                            <UserDetailInput placeholder="Ваше имя"/>
                            <UserDetailInput placeholder="Ваш город"/>
                        </UserDetailRow>
                        <UserDetailRow>
                            <UserDetailInput placeholder="Ваше E-mail"/>
                            <UserDetailInput placeholder="Ваше телефон"/>
                        </UserDetailRow>
                    </UserDetailWrapper>
                    <Button css={css`background-color: ${colors.white}`}>Отправить</Button>
                </ResultBody>
            </ResultBodyWrapper>
        </Root>
    }
}


function getCoastMl108(n: number) {
    if (n < 0) return 0;
    if (n < 20) return n * 55000;
    if (n < 99) return n * 50000;
    return n * 48000;
}

function getCoastMl3008(n: number) {
    if (n < 0) return 0;
    if (n < 5) return n * 290000;
    if (n < 10) return n * 270000;
    return n * 255000;
}

function getCoastAdditional(n: number) {
    if (n < 0) return 0;
    return n * 6000
}

function calcInvestments({ml108, ml3008, additional}: IState) {
    if (isNaN(+ml108) || isNaN(+ml3008) || isNaN(+additional)) return '-';
    return Math.ceil((getCoastMl108(+ml108) + getCoastMl3008(+ml3008) + getCoastAdditional(+additional)) * 100) / 100
}

function calcProfit({ml108, ml3008, additional, hour, day, ad}: IState) {
    if (isNaN(+ml108) || isNaN(+ml3008) || isNaN(+additional)|| isNaN(+hour) || isNaN(+day) || isNaN(+ad)) return 0;
    const midPrice = ((+day)*2+(+hour))/3;
    const mid10= (() => {
        if(+ml108 <= 0) return 0;
        else if(+ml108 + (+ml3008*3) > 99) return 4.5;
        else if(+ml108 + (+ml3008*3) < 30) return 3;
        return 4
    })() * midPrice * 30;
    const mid30= (() => {
        if(+ml3008 <= 0) return 0;
        else if(+ml108 + (+ml3008*3) > 99) return 18;
        else if(+ml108 + (+ml3008*3) < 50) return 9;
        return 12
    })()  * midPrice * 30;

    return Math.ceil((mid10*(+ml108)+mid30*(+ml3008)+(+ad)) * 100) / 100
}


// const calcYourProfit = (p: number) =>  Math.ceil((p * 0.85) * 100) / 100;
const calcCommission = (p: number) =>  Math.ceil((p * 0.15) * 100) / 100;
