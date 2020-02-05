import React from "react";
import styled from "@emotion/styled";
import {fonts} from "@src/vars";

const Root = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.div`
${fonts.how_it_works_title};
padding-bottom: 22px;
max-width: 512px;
@media(max-width: 1280px){
max-width: 400px;
}
@media(max-width: 768px){
max-width: 100%;
}
`
const Text = styled.div`
${fonts.block_text};
max-width: 400px;
@media(max-width: 1280px){
max-width: 300px;
}
@media(max-width: 768px){
max-width: 100%;
}
`

const Description: React.FC<{ title: string, text: string }> = ({title, text}) => <Root>
    <Title>{title}</Title>
    <Text>{text}</Text>
</Root>

export default Description
