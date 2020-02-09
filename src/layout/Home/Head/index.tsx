import React from 'react'
import styled from "@emotion/styled";
import {colors, fonts, mainPadding} from "@src/vars";
import LogoBattBox from "./LogoBattBox";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${mainPadding};
  padding-top: 57px;
  padding-bottom: 20px;
  //background: ${colors.gray};
  //z-index: 10;
  @media(max-width: 1280px){
    padding-top: 40px;
  }
  @media(max-width: 768px){
    padding-top: 34px;
  }
  @media(max-width: 375px){
    padding-top: 27px;
  }
  
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -18px;
  & > *{
  margin: 0 18px;
  }
  
  @media(max-width: 1280px){
    margin: 0 -12px;
    & > *{
      margin: 0 12px;
    }
  }
`;

const Nav = styled.div`
  ${fonts.navbar_font};
`

export default class Head extends React.Component {

    render() {
        return <Root>
            <LogoBattBox/>
            {/*<NavList>*/}
            {/*    <Nav>Что такое BattBox?</Nav>*/}
            {/*    <Nav>Преимущества</Nav>*/}
            {/*    <Nav>Калькулятор</Nav>*/}
            {/*    <Nav>Контакты</Nav>*/}
            {/*</NavList>*/}
        </Root>;
    }
}
