/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { colors, fonts } from "@src/vars";
import { css, jsx } from "@emotion/core";
import ContactInputs from "@src/layout/GetContactsField/ContactInputs";
const Root = styled.div`
padding: 20px 7vw;
display: flex;
flex-direction: column;
align-items: center;
`


const Title = styled.div`
${fonts.gotham_black_45_medium};

@media(max-width: 1280px){
  ${fonts.gotham_black_32_medium};
}

@media(max-width: 768px){
  ${fonts.gotham_black_22_medium};
}

`

const Text = styled.div`
${fonts.roboto_black_30};
@media(max-width: 1280px){
  ${fonts.roboto_black_22};
}
@media(max-width: 768px){
  ${fonts.roboto_white_16};
  color: ${colors.black};
  text-align: center;
}
`


export default class TopSix extends React.Component{

    render(){
        return <Root>
            <Title>Топ-6 свободных городов<br/>для открытия франшизы</Title>
            <Text>
                <br/><br/>
                Санкт-Петербург<br/><br/>
                Екатеринбург<br/><br/>
                Казань<br/><br/>
                Сочи<br/><br/>
                Новосибирск<br/><br/>
                Нижний Новгород<br/><br/><br/><br/>
            </Text>
            <Title>Ваши контакты для связи<br/><br/></Title>
            <ContactInputs/>
        </Root>
    }
}
