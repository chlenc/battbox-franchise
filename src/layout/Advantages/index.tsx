/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import desktop from './bgDesktop.svg'
import mobile from './bgMobile.svg'
import { colors, fonts } from "@src/vars";
import { css, jsx } from "@emotion/core";


const Root = styled.div`
background: url("${desktop}") center no-repeat;
background-size: cover;
padding: 3.28vw  8vw 10vw 8vw;
@media (max-width: 1280px) {padding: 3.13vw 13vw 10vw 13vw}
@media (max-width: 768px) {
background: ${colors.bgDark};
padding: 9vw  7vw 8vw 7vw;
display: flex;
flex-direction: column;
align-items: center;
}
`;

const Title = styled.div`
${fonts.gotham_white_45_medium};
margin-bottom: 11.5vw;
@media (max-width: 1280px) {
${fonts.gotham_white_32_medium};
margin-bottom: 7.5vw;
}
@media (max-width: 768px) {
${fonts.gotham_white_22_medium};

}
`;

const Row = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 11.5vw;
&:last-child{
margin-bottom: 0;
}
@media (max-width: 1280px) {margin-bottom: 7.3vw;}
@media (max-width: 768px) {display: none}
`;

const Item = styled.div`
position: relative;
width: 25vw;
padding: 0 0 0 30px;
${fonts.gotham_white_1dot2vw};
b{${fonts.gotham_white_1dot2vw_medium};}
@media (max-width: 1280px) {
    ${fonts.gotham_white_1vw};
    b{${fonts.gotham_white_1vw_medium};}
    width: 20vw;
}
@media (max-width: 768px) {
    ${fonts.gotham_white_18};
    b{${fonts.gotham_white_18_medium};}
    width: unset;  
    margin-bottom: 4vw;
}


`;

const roundStyle = css`
position: absolute;
//top: 0.2vw;
left: 0;
@media (max-width: 768px) {
width: 10px;
}
`;

const Section = styled.div`
display: flex;
position:relative;
flex-direction: column;
`
const Mobile = styled.div`
display: none;
@media (max-width: 768px) {display: block;}

& > :last-child{
margin-top: 300px;
@media (max-width: 450px) {   margin-top: 70vw;}
}
`

const imgStyle = css`
width: 100%;
position: absolute;
top: -360px;
@media (max-width: 450px) {   top: -75vw;}

`;
const Mbr = styled.br`display: none;@media (max-width: 768px) and (min-width: 480px) {display: block;}`

const Round = () =>
    <svg css={roundStyle} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="7.5" stroke="#01FFFF" strokeWidth="3"/>
    </svg>


const Advantages: React.FunctionComponent = () => <Root>
    <Title>
        Наши преимущества:
    </Title>
    {/*mobile*/}
    <Mobile>
        <Section>
            <Applications/>
            <Profit/>
            <Network/>
        </Section>
        <Section>
            <img css={imgStyle} src={mobile} alt="acc"/>
            <Station/>
            <Smart/>
            <Experience/>
        </Section>
    </Mobile>
    {/*desktop and tablet*/}
    <Row>
        <Station/>
        <Applications/>
    </Row>
    <Row>
        <Network/>
        <Profit/>
    </Row>
    <Row>
        <Smart/>
        <Experience/>
    </Row>

</Root>

const Station = () => <Item>
    <Round/>
    <b>вандалостойкая станция <br/></b>
    все power bank заблокированы<Mbr/>
    с помощью электронного замка
</Item>
const Applications = () => <Item>
    <Round/>
    <b>приложение для iOS и Android<br/></b>
    быстрая регистрация,
    карта с зарядками, <Mbr/>
    автоматическое списание
    стоимости<Mbr/> аренды
</Item>
const Network = () => <Item>
    <Round/>
    <b>автоматизированная сеть<br/></b>
    все оборудование отслеживается<Mbr/>
    online управяйте через платформу<Mbr/>
    BattBox management
</Item>
const Profit = () => <Item>
    <Round/>
    <b>дополнительная прибыль<br/></b>
    каждый power bank -
    это рекламная <Mbr/>площадка,
    ей вы распоряжаетесь<Mbr/>
    самостоятельно и получаете<Mbr/>
    100% от вознаграждения
</Item>
const Smart = () => <Item>
    <Round/>
    <b>умная зарядка<br/></b>
    наши power bank имеют MFI<Mbr/>
    сертификацию и кнопку плавного<Mbr/>
    пуска для безопасности смартфона
</Item>
const Experience = () => <Item>
    <Round/>
    <b>мировой опыт<br/></b>
    мы являемся партнерами
    крупнейшей <Mbr/>Сингапурской
    компании с присутствием<Mbr/>
    на рынке пауршеринга
    более 2-ух лет
</Item>

export default Advantages
