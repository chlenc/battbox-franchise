/** @jsx jsx */

import React, {FC, useState} from "react";
import styled from "@emotion/styled";
import {colors, fonts, gotham_bold, mainPadding} from "@src/vars";
import ContactInputs, {buttonDarkStyle} from "@src/Components/GetContactsField/ContactInputs";
import {useWindowDimensions} from "@src/utils";
import Button from "@src/Components/Button";
import {Swipeable} from "react-swipeable";
import {css, jsx} from "@emotion/core";

const Root = styled.div`
background: transparent;
width: 100%;
`
const Title = styled.div`
${fonts.block_title};
color: ${colors.black};
padding-bottom: 42px;
@media(max-width: 1280px){
  padding-bottom: 34px;
}
`;
const ModalRoot = styled.div`
background-color: #34B6B1;
display: flex;
flex-direction: column;
position: fixed;
border-radius: 40px 40px 0 0;
bottom: 0;
left: 0;
right: 0;
top: 24px;
z-index: 10;
${mainPadding};
`

const ModalTitle = styled.div`
${gotham_bold};
color: #383838;
font-size: 20px;
line-height: 24px;
padding: 27px 0 16px 0;
`

const CloseStick = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    content: "";
    width: 15vw;
    height: 1vw;
    top: 1vw;
    background: #202020;
    mix-blend-mode: multiply;
    opacity: 0.4;
    border-radius: 10px;
`


const GetContactField: FC<{ title?: string, hideTitle?: boolean, darkTheme?: boolean }>
    = ({title, hideTitle, darkTheme}) => {
    const {width} = useWindowDimensions();

    const [isOpen, setValue] = useState(false);

    const handleOpen = () => setValue(true);
    const handleClose = () => setValue(false);

    return width > 768
        ? <Root>
            {!hideTitle && <Title>{title}</Title>}
            <ContactInputs darkTheme/>
        </Root>
        : <div css={css`width: 100%`}>
            <Button css={darkTheme && buttonDarkStyle} onClick={handleOpen}>{title}</Button>
            {isOpen &&
            <Swipeable onSwiped={handleClose}>
                <ModalRoot>
                    <CloseStick onClick={handleClose}/>
                    <ModalTitle>Ваши контакты для связи</ModalTitle>
                    <ContactInputs/>
                </ModalRoot>
            </Swipeable>
            }

        </div>
}
export default GetContactField
