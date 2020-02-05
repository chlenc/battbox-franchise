/** @jsx jsx */
import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import Input from '@src/Components/Input';
import Button from '@src/Components/Button';
import {css, jsx} from '@emotion/core';
import {colors, fonts, roboto} from '@src/vars';
import axios from 'axios';

const Root = styled.div`
display: flex;
margin: 0 -10px;
& > * {
margin: 0 10px;
}
@media(max-width: 1280px){
    margin: 0 -8px;
    & > * {
      margin: 0 8px;
    }
}

@media(max-width: 768px){
  margin: -8px 0;
  width: 100%;
  flex-direction: column;
  & > * {
    margin: 8px 0 ;
  }
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
    isDone: boolean
    isLoading: boolean
}


const InputField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  @media(max-width: 1280px){
    flex: 1;
  }
`;
const ButtonField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 14;
  @media(max-width: 1280px){
    flex: 1;
  }
`;

const ErrorText = styled.div`
${fonts.roboto_white_15};
font-size: 14px;
color: #FF0000;
margin-top: 6px;
`;


export default class ContactInputs extends React.Component<IProps, IState> {

    state = {
        mail: '',
        name: '',
        phone: '',
        city: '',
        // 'name': 'Алексей', 'city': 'Москва', 'phone': '89151272664', 'mail': 'alexnagorny.an@gmail.com',
        ismail: undefined,
        isname: undefined,
        isphone: undefined,
        iscity: undefined,

        isDone: false,
        isLoading: false,
    };


    handleChangeMail = ({target: {value: mail}}: React.ChangeEvent<HTMLInputElement>) => {
        const ismail = validate(mail, 'mail');
        this.setState({mail, ismail});
    };

    handleChangeName = ({target: {value: name}}: React.ChangeEvent<HTMLInputElement>) => {
        const isname = validate(name);
        this.setState({name, isname});
    };

    handleChangePhone = ({target: {value: phone}}: React.ChangeEvent<HTMLInputElement>) => {
        const isphone = validate(phone, 'phone');
        let state: any = {isphone};
        if (!isNaN(+phone)) state.phone = phone;
        this.setState(state);

    };

    handleChangeCity = ({target: {value: city}}: React.ChangeEvent<HTMLInputElement>) => {
        const iscity = validate(city);
        this.setState({city, iscity});
    };

    handleSubmit = async () => {
        const {mail, name, phone, city} = this.state;
        const ismail = validate(mail, 'mail');
        const isname = validate(name);
        const isphone = validate(phone, 'phone');
        const iscity = validate(city);
        if (ismail && isname && isphone && iscity) {
            this.setState({isLoading: true});
            const url = process.env.BACKEND_URL || 'https://franchize-mail-service.herokuapp.com/email';
            const key = process.env.SECURE_KEY || 'mytopthebestsecurekey';
            if (!url || !key) {
                console.error('invalid backend url: ', url);
                return;
            }
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'SECUREKEY': key,
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            };
            const response = await axios.post(url, {mail, name, phone, city}, {headers, method: 'POST'});
            console.log(response);
            if (response.status === 200) {
                this.setState({isDone: true, isLoading: false});
            } else {
                console.error(response);
            }
        } else {
            this.setState({ismail, isname, isphone, iscity});
        }
    };

    render() {
        const {mail, name, phone, city, ismail, isname, isphone, iscity, isDone, isLoading} = this.state;
        // if (isLoading) return <DoneText css={resultPageForm && resultPageDoneStyle}>Ваши данные
        //     отправляются...</DoneText>;
        // if (isDone) return <DoneText css={resultPageForm && resultPageDoneStyle}>Ваши данные отправленны! В ближайшее
        //     время мы с вами свяжемся!</DoneText>;
        return <Root>
            <InputField>
                <Input onChange={this.handleChangeMail} css={getStyle(ismail)} value={mail}
                       placeholder="Ваш E-mail"/>
                {ismail === false && <ErrorText>Неверно заполнено</ErrorText>}
            </InputField>
            <InputField>
                <Input onChange={this.handleChangeName} css={getStyle(isname)} value={name}
                       placeholder="Ваше имя"/>
                {isname === false && <ErrorText>Неверно заполнено</ErrorText>}
            </InputField>
            <InputField>
                <Input onChange={this.handleChangePhone} css={getStyle(isphone)} value={phone}
                       placeholder="Ваш телефон"/>
                {isphone === false && <ErrorText>Неверно заполнено</ErrorText>}
            </InputField>
            <InputField>
                <Input onChange={this.handleChangeCity} css={getStyle(iscity)} value={city}
                       placeholder="Ваш город"/>
                {iscity === false && <ErrorText>Неверно заполнено</ErrorText>}
            </InputField>
            <ButtonField>
                <Button onClick={this.handleSubmit}>Получить</Button>
            </ButtonField>
        </Root>;
    }
}


function getStyle(valid?: boolean) {
    if (valid === true) return css`background-color: rgb(50,176,171) !important;border-color: rgb(50,176,171) !important;`;
    else if (valid === false) return css` border-color: #FF0000 !important;`;
    return undefined;
}


function validate(value: string, type?: 'mail' | 'phone') {
    let isValid = false;
    if (type === 'mail') {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            isValid = true;
    } else if (type === 'phone') {
        if (!isNaN(+value) && (value.length === 11))
            isValid = true;
    } else if (value !== '') {
        isValid = true;
    }
    return isValid;

}
