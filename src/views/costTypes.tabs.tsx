import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import vars from '_vars.scss';

const Wrapper = styled.ul`
  background: #fff;
  font-size: 16px;
  display: flex;
  >li{
    flex-grow: 1;
    >a{
      height: ${vars.heightTab};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.active::after{
        content: '';
        display:block;
        height: 3px;
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: ${vars.colorMain}; 
      }
    }
  }
`


export const Tabs = () => {
  return <Wrapper>
    <li><NavLink exact to={`/costTypes/expense`} activeClassName="active">支出</NavLink></li>
    <li><NavLink exact to={`/costTypes/earn`} activeClassName="active">收入</NavLink></li>
  </Wrapper>
}