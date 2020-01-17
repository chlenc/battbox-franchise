import React from "react";
import styled from "@emotion/styled";
import Input from "@src/Components/Input";
import Button from "@src/Components/Button";

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
}

export default class ContactInputs extends React.Component<IProps, IState> {

    state = {mail: '', name: '', phone: '', city: ''};


    handleChangeMail = ({target: {value: mail}}: React.ChangeEvent<HTMLInputElement>) => this.setState({mail});

    handleChangeName = ({target: {value: name}}: React.ChangeEvent<HTMLInputElement>) => this.setState({name});

    handleChangePhone = ({target: {value: phone}}: React.ChangeEvent<HTMLInputElement>) => this.setState({phone});

    handleChangeCity = ({target: {value: city}}: React.ChangeEvent<HTMLInputElement>) => this.setState({city});

    handleSubmit = () => {
    };

    render() {
        const {mail, name, phone, city} = this.state;
        return <Root>
            <Input onChange={this.handleChangeMail} value={mail} placeholder="Ваш E-mail"/>
            <Input onChange={this.handleChangeName} value={name} placeholder="Ваше имя"/>
            <Input onChange={this.handleChangePhone} value={phone} placeholder="Ваш телефон"/>
            <Input onChange={this.handleChangeCity} value={city} placeholder="Ваш город"/>
            <Button onClick={this.handleSubmit}>Отправить</Button>
        </Root>
    }
}

function validate(value: string, type?: 'mail') {
    let isValid = false
    if (type === "mail" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        isValid = true;
    } else if (value !== '') {
        isValid = true;
    }
    return isValid

}
