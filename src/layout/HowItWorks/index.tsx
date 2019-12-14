/** @jsx jsx*/

import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { css, jsx } from "@emotion/core";
import p1 from './1.svg'
import p2 from './2.svg'
import p3 from './3.svg'

const Root = styled.div`
background-color: ${colors.white};
//@media (max-width: 1280px) {}
//@media (max-width: 768px) {}
display: flex;
flex-direction: column;
align-items: center;
padding: 8vw 0 ;

`

const Title = styled.h1`
${fonts.gotham_black_45_medium};
margin: 0 0 95px 0 ;

@media (max-width: 1280px) {${fonts.gotham_black_32_medium};    margin: 75px 0 45px 0 ;}
@media (max-width: 768px) {    ${fonts.gotham_black_22_medium};    margin: 40px 0 45px 0 ;}
@media (max-width: 375px) {
}

`

const Items = styled.div`
display: flex;
`

const itemStyle = css`
//height: 70px;
//width: 30px;
position: relative;
`


const Item1 = styled.div`
${itemStyle};
background: url("${p1}") no-repeat;
`

const Item2 = styled.div`
${itemStyle};
background: url("${p2}") no-repeat;
`

const Item3 = styled.div`
${itemStyle};
background: url("${p3}") no-repeat;
`


const Text = styled.div`
background-color: transparent;
padding: 0.5vw 0 0 1.2vw;
width: 22vw;
${fonts.gotham_black_25};
b{
${fonts.gotham_black_25_medium};
}
`

const HowItWorks = () => <Root>
    <Title>Как работает франшиза BattBox?</Title>
    <Items>
        <Item1>
            <Text>
                <b>
                    Вы приобретаете станции<br/>
                    с power bank в комплекте<br/><br/>
                </b>
                Устанавливаете их по всему городу<br/>
            </Text>

        </Item1>
        <Item2>
            <Text>
                <b>
                    Пользуетесь инфраструктурой<br/>
                    BattBox Management<br/><br/>
                </b>
                Обучаетесь нашему Ноу-Хау<br/>
            </Text>
        </Item2>
        <Item3>
            <Text>
                <b> Зарабатываете<br/><br/><br/></b>
                Развиваете сеть<br/>
            </Text>
        </Item3>
    </Items>
</Root>

export default HowItWorks
