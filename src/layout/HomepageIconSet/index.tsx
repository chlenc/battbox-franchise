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
  margin: 0 20px;
}
& > * {
  margin: 0;
}
`

const IconHolderRoot = styled.div`
//display: flex;
//flex-direction: column;
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

const IconWrapperRoot = styled.div`padding-bottom: 28px`

const IconWrapper: FunctionComponent<{ title: string, subtitle: string }> = ({title, subtitle, children: icon}) =>
    <IconWrapperRoot>
        <Icon>{icon}</Icon>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubTitle>{subtitle}</ItemSubTitle>
    </IconWrapperRoot>

const HomepageIconSet: FC = () => <Root>
    <Title>Крупнейшая сеть пауршеринга в России</Title>
    <IconHolder>{icons.map(({title, subtitle, icon}, key) =>
        <IconWrapper key={key} title={title} subtitle={subtitle} children={icon}/>)}</IconHolder>
</Root>

export default HomepageIconSet
