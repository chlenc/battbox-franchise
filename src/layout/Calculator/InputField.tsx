/** @jsx jsx */
import styled from "@emotion/styled";
import React from "react";
import { css, jsx } from "@emotion/core";
import { fonts, gotham_light, gotham_medium } from "@src/vars";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css'

const InputWrapper = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const CalcInput = styled.input`
width: 13vw;
height: 2vw;
border: none;
outline: none;
background: #F3F3F3;
border-radius: 2px;
padding-left: 1vw;

`


const InputFieldRoot = styled.div`
${fonts.gotham_black_22};
font-size: 1.2vw;
line-height: 1.3vw;
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 1.2vw;
position:relative;
`;
const InputFieldText = styled.div`
flex:1;
display: flex;
`;

interface IProps {
    text: string
    info?: string
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputField: React.FunctionComponent<IProps> = ({text, info}) => <InputFieldRoot>
    {info && <Question text={info}/>}
    <InputFieldText>{text}</InputFieldText>
    <InputWrapper><CalcInput/></InputWrapper>
</InputFieldRoot>;

const Dem = styled.div`
width: 3.5vw;
${gotham_light};
text-align: left;
padding-left: 1vw;
`;

const InputFieldOut = styled.div`
display: flex;
justify-content: flex-end; 
flex:1;
${gotham_medium};
text-align: left;
`;


export const OutputField: React.FunctionComponent<{ text: string, value?: string | number, isTitle?: boolean, dem?: string }>
    = ({text, value, isTitle, dem}) =>
    <InputFieldRoot css={css`align-items: flex-end; ${isTitle ? 'font-size: 1.3vw;' : ''}`}>
        <InputFieldText css={css`flex:2.6`}>{text}</InputFieldText>
        <InputFieldOut>
            {value != null ? value : '-'}
            {isTitle ? <div>&nbsp;{dem}</div> : <Dem>{dem}</Dem>}

        </InputFieldOut>

    </InputFieldRoot>;


const Text = styled.div`
${fonts.gotham_black_18}
`

const questionStyle = css`
width: 1.3vw;
height: 1.3vw;
position: absolute;
left: -2.3vw;
`

const arrowStyle = css`
    width: 1vw;
    height: 1vw;
    position: absolute;
    top: -0.93vw;
    left: -0.3vw;
    transform: rotate(180deg);
`;

const Arrow = () => <svg css={arrowStyle} width="45" height="43" viewBox="0 0 45 43" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
    <path
        d="M16.4951 4.05287C19.1241 -0.914695 26.2401 -0.914685 28.8691 4.05288L44.0344 32.7083C46.5016 37.3702 43.122 42.9826 37.8474 42.9826H7.51689C2.24231 42.9826 -1.13735 37.3702 1.3299 32.7083L16.4951 4.05287Z"
        fill="#fff"/>
</svg>


const Question: React.FunctionComponent<{ text: string }> = ({text}) =>
    <Tooltip
        placement="topLeft"
        overlay={<Text>{text}</Text>}
        align={{offset: [-40, -10]}}
        trigger="click"
        arrowContent={<Arrow/>}
    >
        <svg css={questionStyle} width="25" height="25" viewBox="0 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.7431 15.7155C11.6351 15.7155 11.5451 15.6795 11.4731 15.6075C11.4011 15.5355 11.3651 15.4455 11.3651 15.3375V14.6175C11.3891 13.9815 11.5511 13.4355 11.8511 12.9795C12.1511 12.5235 12.5891 12.0015 13.1651 11.4135C13.6331 10.9335 13.9751 10.5375 14.1911 10.2255C14.4071 9.91348 14.5151 9.57148 14.5151 9.19948C14.5151 8.64748 14.2811 8.20948 13.8131 7.88548C13.3571 7.56148 12.8231 7.39948 12.2111 7.39948C10.7831 7.39948 9.94314 8.11948 9.69114 9.55948C9.63114 9.82348 9.47514 9.95548 9.22314 9.95548H8.35914C8.23914 9.95548 8.14314 9.91948 8.07114 9.84748C7.99914 9.77548 7.96314 9.67948 7.96314 9.55948C7.98714 8.89948 8.17314 8.29348 8.52114 7.74148C8.88114 7.17748 9.38514 6.72748 10.0331 6.39148C10.6811 6.05548 11.4251 5.88748 12.2651 5.88748C13.1531 5.88748 13.8971 6.04348 14.4971 6.35548C15.1091 6.65548 15.5591 7.05148 15.8471 7.54348C16.1351 8.02348 16.2791 8.53948 16.2791 9.09148C16.2791 9.70348 16.1411 10.2315 15.8651 10.6755C15.5891 11.1195 15.1751 11.6355 14.6231 12.2235C14.1671 12.7035 13.8251 13.1115 13.5971 13.4475C13.3691 13.7715 13.2371 14.1375 13.2011 14.5455C13.1771 14.8815 13.1651 15.1335 13.1651 15.3015C13.1051 15.5775 12.9551 15.7155 12.7151 15.7155H11.7431ZM11.5991 18.6675C11.4791 18.6675 11.3771 18.6315 11.2931 18.5595C11.2211 18.4755 11.1851 18.3735 11.1851 18.2535V17.1555C11.1851 17.0355 11.2211 16.9395 11.2931 16.8675C11.3771 16.7835 11.4791 16.7415 11.5991 16.7415H12.7691C12.8891 16.7415 12.9911 16.7835 13.0751 16.8675C13.1591 16.9395 13.2011 17.0355 13.2011 17.1555V18.2535C13.2011 18.3735 13.1591 18.4755 13.0751 18.5595C12.9911 18.6315 12.8891 18.6675 12.7691 18.6675H11.5991Z"
                fill="#15E9E9"/>
            <circle cx="12.3691" cy="12.6675" r="11" stroke="#15E9E9" strokeWidth="2"/>
        </svg>
    </Tooltip>;


export default InputField;
