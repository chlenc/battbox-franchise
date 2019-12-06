import React, { FC, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { css } from "emotion";

const Root = styled.div`
padding: 20px 0;
background: ${colors.white};
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

const ItemSubTitle = styled.div`
${fonts.roboto_black_30};
@media (max-width: 1280px){${fonts.roboto_black_22};
@media (max-width: 768px){${fonts.roboto_black_18};

`



const ContactInputs = () => <div></div>

const powerStyle = css`
position:absolute;
width: 76px;
height: 93px;
`
const Power = () => <svg css={powerStyle} width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75.588 0H33.4689C33.3214 0 33.1901 0.0746486 33.1414 0.186112L0.0197076 76.0561C-0.0591147 76.2366 0.108319 76.4254 0.347258 76.4254H32.7663C32.9957 76.4254 33.162 76.6004 33.1007 76.7774L21.7123 109.647C21.6138 109.931 22.0643 110.126 22.3075 109.904L89.9132 48.2268C90.1099 48.0473 89.9507 47.7659 89.6524 47.7659H50.4361C50.1857 47.7659 50.0177 47.56 50.1185 47.3764L75.9057 0.389443C76.0064 0.205902 75.8385 0 75.588 0Z" fill="#15E9E9"/>
</svg>

const IconWrapperRoot = styled.div`
position:relative;
`

const IconWrapper: FunctionComponent<{ subtitle: string }> = ({subtitle, children: icon}) =>
    <IconWrapperRoot>
        <Power/>
        <ItemSubTitle>{subtitle}</ItemSubTitle>
    </IconWrapperRoot>

const GetContactField: FC = () => <Root>
    <Title>Ваши контакты для связи</Title>
    <ContactInputs/>
    <IconHolder>{['', '', ''].map((subtitle, key) =>
        <IconWrapper key={key} subtitle={subtitle}/>)}</IconHolder>
</Root>

export default GetContactField
