/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import kludge from "./kludge.svg";
import {useWindowDimensions} from "@src/utils";
import Tarif_mobile from "@src/layout/Tarif/Tarif_mobile";

const Tarif = () => {
    const {width} = useWindowDimensions();
    return width > 768
        ? <img css={css`width: 100vw;height: auto;`} src={kludge} alt=""/>
        : <Tarif_mobile/>
}

/*

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
font-size: 1.25vw;
`

const TarifField = styled.div`
background-color: ${colors.black};
${mainPadding};
padding-right: unset;
padding-top: 30px;
padding-bottom: 30px;
position: relative;
display: flex;
justify-content: space-between;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin: -16px 0;
  max-width: 50%;
  & > * {
    margin: 16px 0;
  }

`

const Item = styled.div`
${fonts.block_text};
position: relative;
display: flex;
align-items: center;
`

const ImgContainer = styled.div`
    display: flex;
    max-width: 100%;
    //position: absolute;
    //top: -32%;
    //right: 6vw;
    margin-top: -174px;
    margin-bottom: -100px;
`

* */

// class Tarif extends React.Component {
//
//     render() {
//         return <Root>
//             <Title>Тарификация одной станции:</Title>
//             <Subtitle>Вы можете выбрать наиболее подходящий вам <br/>тариф и сообщить об этом менеджеру</Subtitle>
//             <TarifField>
//                 <Items>
//                     <Item><Question text={'hi there'}/>Один комплект оборудования</Item>
//                     <Item>Доступ в личный кабинет</Item>
//                     <Item>Инструкция по развитию бизнеса</Item>
//                     <Item>Гарантия на станцию</Item>
//                     <Item>Эксклюзив</Item>
//                     <Item><Question text={'hi there'}/>Страховка power bank</Item>
//                     <Item>Консультация в нерабочее время</Item>
//                 </Items>
//                 <ImgContainer>
//                     <img src={simple} alt="simple"/>
//                     <img css={css`padding-bottom: 10px;`} src={black} alt="black"/>
//                     <img src={gold} alt="gold"/>
//                 </ImgContainer>
//             </TarifField>
//         </Root>
//     }
// }


export default Tarif
