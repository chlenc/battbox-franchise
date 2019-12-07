import React, { FC, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { css } from "emotion";
import ContactInputs from "@src/layout/GetContactsField/ContactInputs";
import { icons } from "@src/layout/GetContactsField/Icons";

const Root = styled.div`
background: ${colors.white};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 36px;

`
const Title = styled.div`
${fonts.gotham_black_45_medium};
padding: 80px 0 30px 0;

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
margin-bottom: 112px;
& > * {
margin-right: 150px;
}

@media (max-width: 1400px){  
  & > * {
    margin-right: 60px;
  };
}
@media (max-width: 1100px){  
  & > * {
    margin-right: 0px;
  };
}

& > :last-child{
  margin-right: 0;
}

@media (max-width: 950px){//todo fix
flex-direction: column;
margin-bottom: 26px;
 & > * {
 margin: 70px 0 50px 0;
 flex: 1
 }
}
`

const ItemSubTitle = styled.div`
${fonts.roboto_black_30};
@media (max-width: 1280px){${fonts.roboto_black_22};
@media (max-width: 768px){${fonts.roboto_black_18};

`

const iconStyle = css`
height: 110px;
@media (max-width: 1280px){height: 76px}
`;

const MobileHideWrapper = styled.div`@media(max-width: 768px){ display: none}`

const IconWrapper: FunctionComponent<{ subtitle: string }> = ({subtitle, children: icon}) =>
    <div>
        {icon}
        <ItemSubTitle>{subtitle}</ItemSubTitle>
    </div>;

const GetContactField: FC = () => <Root>
    <MobileHideWrapper>
        <Title>Ваши контакты для связи</Title>
        <ContactInputs/>
    </MobileHideWrapper>
    <IconHolder>
        {icons.map(({subtitle, icon}, key) =>
            <IconWrapper key={key} subtitle={subtitle}>{icon(iconStyle)}</IconWrapper>)}
    </IconHolder>
    <MobileHideWrapper>
        <Title>Станьте владельцем автоматизированного<br/>бизнеса с растущим спросом</Title>
    </MobileHideWrapper>
</Root>

export default GetContactField
