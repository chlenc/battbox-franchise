/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham, gotham_bold, mainPadding} from "@src/vars";
import {css, jsx} from "@emotion/core";
import ScrollBar from 'react-perfect-scrollbar'

import black from './black.svg'
import simple from './simple.svg'
import gold from './gold.svg'
import black_m from './black_m.svg'
import simple_m from './simple_m.svg'
import gold_m from './gold_m.svg'
import Info from "@src/Components/Info";
import {useWindowDimensions} from "@src/utils";
import {InfoTextRoot} from "@src/layout/Tarif/Tarif_mobile";


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

const textStyle = css`
${fonts.block_text};
@media (max-width: 1550px) {
      font-size: 20px;
      line-height: 24px;      
}
@media (max-width: 1280px) {
      font-size: 16px;
      line-height: 19px;      
}
`

const Subtitle = styled.div`
${textStyle};
${mainPadding};
@media (max-width: 1680px) {
      font-size: 18px;
      line-height: 22px;      
}
color: #949494;
padding-bottom: 54px;

`

const TarifField = styled.div`
background-color: ${colors.black};
${mainPadding};


@media (max-width: 1550px) {
      padding-top: 20px;
      padding-bottom: 20px;     
}

@media (max-width: 1280px) {
      padding-right: 0;     
}
padding-right: unset;
padding-top: 30px;
padding-bottom: 30px;
display: flex;
//justify-content: star;

`


const Item = styled.div`
${textStyle};
position: relative;
display: flex;
align-items: center;
`
const Items = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: -16px 0;
  & > * {margin: 16px 0;}
  @media (max-width: 1550px) {
      margin: -8px 0;
      & > * {margin: 8px 0;}     
  }
  //@media (max-width: 1280px) {
  //    margin: -6px 0;
  //    & > * {margin: 6px 0;}      
  //}
`


const iconStyle = css`
position: absolute;
left: calc(-1 * (31px + 14px));
@media(max-width: 1550px){
  width: 22px;  
  left: calc(-1 * (22px+ 14px));
}
`


export default class Tarif_desktop extends React.Component {

    render() {
        return <Root>
            <Title>Тарификация одной станции:</Title>
            <Subtitle>Вы можете выбрать наиболее подходящий вам <br/>тариф и сообщить об этом менеджеру</Subtitle>
            <TarifField>
                <Items>
                    <Item>
                        <Info top iconStyle={iconStyle} text={
                            <InfoTextRoot>
                                В комплект входит станция<br/>
                                и 6 power bank. Дополнительные<br/>
                                зарядки вы можете приобрести <br/>
                                отдельно.
                            </InfoTextRoot>
                        }/>
                        Один комплект оборудования
                    </Item>
                    <Item>Доступ в личный кабинет</Item>
                    <Item>Инструкция по развитию бизнеса</Item>
                    <Item>Гарантия на оборудование</Item>
                    <Item>
                        <Info top iconStyle={iconStyle}
                              text={
                                  <InfoTextRoot>
                                      Вы становитесь единственным  <br/>
                                      представителем в городе или <br/>
                                      регионе, а также получаете право <br/>
                                      продажи оборудования и работы <br/>
                                      с суб-франчайзи. Подробнее <br/>
                                      узнавайте у менеджера
                                  </InfoTextRoot>
                              }/>
                        Эксклюзив
                    </Item>
                    <Item>
                        <Info top iconStyle={iconStyle}
                                text={
                                    <InfoTextRoot>
                                        Если количество ваших power bank<br/>
                                        в сети уменьшится на 15%<br/>
                                        от первоначального, мы <br/>
                                        вышлем вам новые бесплатно!<br/>
                                        Страховка действует <br/>
                                        1 год и может быть продлена.
                                    </InfoTextRoot>
                                }/>
                                Страховка
                        power bank</Item>
                    <Item>Консультация в нерабочее время</Item>
                </Items>
                <ImgContainer/>
            </TarifField>
        </Root>
    }
}


const ImgContainerRoot = styled.div`
    display: flex;
    flex:3;
    //max-width: 100%;
    margin-top: -195px;
    margin-bottom: -118px;
    @media (max-width: 1550px) {
       margin-top: -176px;
    }
    @media (max-width: 1280px) {
      //margin: -6px 0;
      //& > * {margin: 6px 0;}      
    }
`

const Image = styled.img`
  @media (max-width: 1550px) {
      width: 218px;  
  }
  @media (max-width: 1280px) {
      width: 197px;  
  }
  @media (max-width: 980px) {
  margin-left: -40px ;
  }
`

const MiddleWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`


const middle = css`
padding-bottom: 38px;
@media (max-width: 1550px) {
    padding-bottom: 26px;
}
@media (max-width: 1280px) {
    //padding-bottom: 26px;
}
`;


const BlueText = styled.div`
${textStyle};
color: ${colors.aqua};
padding-left: 20px;
`


const ImgContainer: React.FC = () => {
    const {width} = useWindowDimensions();

    return <ImgContainerRoot>
        <Image src={width > 980 ? simple : simple_m} alt="simple"/>
        <MiddleWrapper>
            <BlueText>Рекомендовано</BlueText>
            <Image css={middle} src={width > 980 ? black : black_m} alt="black"/>
        </MiddleWrapper>
        <Image src={width > 980 ? gold : gold_m} alt="gold"/>
    </ImgContainerRoot>
}





