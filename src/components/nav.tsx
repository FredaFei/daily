import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import Icon from './icon';
import vars from '_vars.scss';

const NavWrapper = styled.div`
  display: flex;
  background: #f1f1f1;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >a{
    width: 33.3333%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    .icon{width: 24px;height: 24px;}
    &.active{color:${vars.colorMain};}
  }
`
export const Nav = () => {
  return <NavWrapper>
    <NavLink to="/home" exact activeClassName="active">
      <Icon name="left" />
      <span>明细</span>
    </NavLink>
    <NavLink to="/recordExpense/create" exact activeClassName="active">
      <Icon name="right" />
      <span>记账</span>
    </NavLink>
    <NavLink to="/me" exact activeClassName="active">
      <Icon name="user" />
      <span>我的</span>
    </NavLink>
  </NavWrapper>
}
