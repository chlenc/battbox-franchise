/** @jsx jsx  **/
import React from "react";
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import RCSelect from 'rc-select';
import './index.css';
import {colors, gotham} from "@src/vars";

const Root = styled.div`
display: flex;
${gotham};
.rc-select{
    flex: 1;
    align-items: center;
    display: flex;
    border-radius: 44px;
    background: rgb(47, 49, 54);
    color: ${colors.white};
    height: 2.3vw;
    font-size: 1vw;
    line-height: 1.5vw;
    @media(max-width: 768px){
        height: 40px;
        font-size: 16px;
        line-height: 18px;
    }
    
  .rc-select-selection{
      background: rgb(47, 49, 54);
      border-radius: 4px;
      border: none;
      box-shadow: none !important;
      //height: 50px;
      
      &__rendered, &-selected-value, .rc-select-search__field{
        //height: 50px;
        display: flex !important;
        align-items: center;
        color: black;
      }
      
      .rc-select-arrow{
        display: flex !important;
        align-items: center !important;
        height: 100% !important;
        right: 5% !important;
      } 
  }
}


`;

interface IProps {
    value?: string
    onChange?: (e: string) => void
    css?: any
    [key: string]: any
}

interface IState {
}

const Arrow = <svg css={css`height: 0.5vw;@media(max-width: 768px){height: 10px}`} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.58647L8 10L16 1.58647L14.4915 0L8 6.82706L1.50849 0L0 1.58647Z" fill="#9C9C9C"/>
</svg>


export default class Select extends React.Component<IProps, IState> {

    render() {
        const {css: style, children, value, onChange, ...others} = this.props;
        return (
            <Root css={style}>
                <RCSelect notFoundContent={"Не найдено"} showSearch value={value} onChange={onChange} inputIcon={Arrow} {...others}>{children}</RCSelect>
            </Root>
        );
    }
}
