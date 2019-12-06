import React, { FC, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { icons } from "./Icons";

const Root = styled.div`
height: 450px;
padding: 20px 0;
background: ${colors.aqua};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.div`
${fonts.gotham_black_45_medium};
padding-bottom: 56px;

@media (max-width: 1280px){
${fonts.gotham_black_32_medium};
}
@media (max-width: 768px){
${fonts.gotham_black_22_medium};
}

`

const Icon = styled.div`
display: flex;
justify-content: center;
svg{
width: 300px;
height: 163.56px;
}
margin-bottom: 12px;
@media (max-width: 1280px){
  svg{
    width: 177px;
    height: 84px;
  }
}
@media (max-width: 768px){
  svg{
    width: 123px;
    height: 60px;
  }
}

`

const IconHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

& > * {
  margin-right: 40px;
  padding-bottom: 28px;
  @media (max-width: 900px){margin-right: 20px;}
}

& > :last-child{
  margin-right: 0;
}

@media (max-width: 768px){
  padding: 0 20%;
   & > * {
   margin: 0;
   flex: 1 35%;
   }
}

@media (max-width: 440px){padding: 0 10%;}
@media (max-width: 330px){padding: 0 5%;}
`


const ItemTitle = styled.div`
${fonts.roboto_black_30_bold};
@media (max-width: 1280px){${fonts.roboto_black_22_bold};}
@media (max-width: 768px){${fonts.roboto_black_18_bold};}
}
`

const ItemSubTitle = styled.div`
${fonts.roboto_black_30};
@media (max-width: 1280px){${fonts.roboto_black_22};
@media (max-width: 768px){${fonts.roboto_black_18};

`

const Sep = styled.br`
display: none;
@media (max-width: 768px){display: block}
`

const IconWrapper: FunctionComponent<{ title: string, subtitle: string }> = ({title, subtitle, children: icon}) =>
    <div>
        <Icon>{icon}</Icon>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubTitle>{subtitle}</ItemSubTitle>
    </div>

const HomepageIconSet: FC = () => <Root>
    <Title>Крупнейшая сеть <Sep/> пауршеринга в России</Title>
    <IconHolder>{icons.map(({title, subtitle, icon}, key) =>
        <IconWrapper key={key} title={title} subtitle={subtitle} children={icon}/>)}</IconHolder>
</Root>

export default HomepageIconSet
