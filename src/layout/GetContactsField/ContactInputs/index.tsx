/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Input from "@src/Components/Input";
import Button from "@src/Components/Button";
import { css, jsx } from "@emotion/core";

const Root = styled.div`
display: flex;
& > * {
margin-right: 20px;
}

& > :last-child{
margin-right: 0;
}

padding-bottom: 120px;
@media(max-width: 768px){
padding-bottom:0;
& > * {
  margin-right: 0;
  margin-bottom: 16px;
}
  width: 100%;
  flex-direction: column;
}
`;

interface IProps {

}

interface IState {
    mail: string
    name: string
    phone: string
    city: string
    ismail?: boolean
    isname?: boolean
    isphone?: boolean
    iscity?: boolean
}


export default class ContactInputs extends React.Component<IProps, IState> {

    state = {
        mail: '',
        name: '',
        phone: '',
        city: '',
        ismail: undefined,
        isname: undefined,
        isphone: undefined,
        iscity: undefined
    };


    handleChangeMail = ({target: {value: mail}}: React.ChangeEvent<HTMLInputElement>) => {
        const ismail = validate(mail, 'mail')
        this.setState({mail, ismail})
    };

    handleChangeName = ({target: {value: name}}: React.ChangeEvent<HTMLInputElement>) => {
        const isname = validate(name)
        this.setState({name, isname})
    };

    handleChangePhone = ({target: {value: phone}}: React.ChangeEvent<HTMLInputElement>) => {
        const isphone = validate(phone)
        this.setState({phone, isphone})
    };

    handleChangeCity = ({target: {value: city}}: React.ChangeEvent<HTMLInputElement>) => {
        const iscity = validate(city)
        this.setState({city, iscity})
    };

    handleSubmit = () => {
        const ismail = validate(this.state.mail, 'mail')
        const isname = validate(this.state.name)
        const isphone = validate(this.state.phone)
        const iscity = validate(this.state.city)
        if (ismail && isname && isphone && iscity) {
            alert('success')
        } else {
            this.setState({ismail, isname, isphone, iscity})
        }
    };

    render() {
        const {mail, name, phone, city, ismail, isname, isphone, iscity} = this.state;
        return <Root>
            <Input onChange={this.handleChangeMail} css={getStyle(ismail)} value={mail}
                   placeholder="Ваш E-mail"/>
            <Input onChange={this.handleChangeName} css={getStyle(isname)} value={name}
                   placeholder="Ваше имя"/>
            <Input onChange={this.handleChangePhone} css={getStyle(isphone)} value={phone}
                   placeholder="Ваш телефон"/>
            <Input onChange={this.handleChangeCity} css={getStyle(iscity)} value={city}
                   placeholder="Ваш город"/>
            <Button onClick={this.handleSubmit}>Отправить</Button>
        </Root>
    }
}


function getStyle(valid?: boolean) {
    if (valid === true) return css`background-color: #9AF9F9`
    else if (valid === false) return css`border-color: #FF0000`
    return undefined
}

function validate(value: string, type?: 'mail') {
    let isValid = false
    if (type === "mail") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            isValid = true;
    } else if (value !== '') {
        isValid = true;
    }
    return isValid

}
