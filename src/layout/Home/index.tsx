import React from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham_bold, mainPadding} from "@src/vars";
import Waves from "@src/layout/Home/Waves";
import Bubbles from "@src/layout/Home/Bubbles";
import Battery from "@src/layout/Home/Battery";
import Head from "./Head";
import GetContactField from "@src/Components/GetContactsField";

const Root = styled.div`
background-color: ${colors.bgDark};
height: 90vh;
display: flex;
position:relative; 
flex-direction: column;
`
const Body = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
width: 100%;
${mainPadding};
@media(max-width: 768px){
  flex-direction: column;
  justify-content: center;
}
`

const Title = styled.h1`
${fonts.home_title};
margin: 0;
`
const SubTitle = styled.h2`
${fonts.home_subtitle};
`
const Text = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media(max-width: 768px){
  padding-bottom: 80px;
}
`

const ContactForm = styled.div`
background: ${colors.aqua};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 372px;
${mainPadding};

@media(max-width: 1280px){
  height: 250px;
}
@media(max-width: 768px){
  height: 140px;
}

`

const BodyWrapper = styled.div`
display: flex;
overflow: hidden;
`

export default class Home extends React.Component {

    render() {
        return <>
            <Root>
                <Head/>
                <BodyWrapper>
                    <Body>
                        <Text>
                            <Title>Франшиза <b>Batt</b>Box</Title>
                            <SubTitle>Инвестируй в будущее и <b>зарабатывай<br/> от 100 000</b> руб. в месяц!</SubTitle>
                        </Text>
                        <Battery/>

                    </Body>
                </BodyWrapper>

                {/*<Bubbles/>*/}
                <Waves/>
            </Root>
            <ContactForm>
                <GetContactField title="Получить бизнес-план"/>
            </ContactForm>
        </>;
    }

}
