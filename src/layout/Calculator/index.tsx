/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { jsx } from "@emotion/core";
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

const ResultBody = styled.div`
display: flex;
flex-direction: column;
padding: 3.4vw 3.1vw 4.7vw 3.1vw;
width: 100%;
`;

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


const Calculator: React.FC = () => {
    // const {  width } = useWindowDimensions();
// console.log(width)

    return <Root>
        <CalcBodyWrapper>
            <CalcBody>
                <Title>Калькулятор окупаемости</Title>
                <Description><br/>Данный калькулятор основан на теоретической модели в г. Москва. Более подробный
                    калькулятор вы можете запросить у менеджера</Description>
                <InputField
                    text="Введите населенность вашего города:"
                    value="0"
                />
                <Divider/>
                <InputField text="Кол-во станций на 10 слотов:"/>
                <InputField text="Кол-во станций на 30 слотов:"/>
                <InputField
                    text="Дополнительные крепления:"
                    info={text}
                />
                <Divider/>
                <InputField
                    text="Час:"
                    info={text}
                />
                <InputField
                    text="Сутки:"
                    info={text}
                />
                <Divider/>
                <InputField
                    text="Монетизация с рекламы:"
                    info={text}
                />
                <InputField text="Зарплата сотрудника на аллокацию:"/>
                <br/>
                <Button>Рассчитать</Button>
            </CalcBody>
        </CalcBodyWrapper>
        <ResultBodyWrapper>
            <ResultBody>
                <Title>Результат</Title><br/>
                <OutputField text="Теоретический срок окупаемости:" value={23} dem={"месяца"} isTitle/>
                <br/><br/><br/>
                <OutputField text="Рекомендуемое количество станций для приобретения:" value={23000} dem={"шт."}/>
                <OutputField text="Требуемые инвестиции в сеть:" value={2080000} dem={"₽"}/>
                <OutputField text="Выручка от всей сети:" value={89000} dem={"₽/мес"}/>
                <OutputField text="Комиссия BattBox:" value={89067} dem={"₽/мес"}/>
                <OutputField text="Расходы на сеть:" value={23000} dem={"₽/мес"}/>
                <OutputField text="Выручка в год:" value={23093449} dem={"₽"}/>

            </ResultBody>
        </ResultBodyWrapper>
    </Root>
}
export default Calculator
