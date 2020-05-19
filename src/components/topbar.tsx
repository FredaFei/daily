import React, { ReactNode } from 'react'
import styled from 'styled-components';
import { history } from '../lib/history';
import { matchPath } from 'react-router-dom'
import Icon from './icon'
import vars from '_vars.scss';

export interface TopbarProps {
  title: string
  action?: ReactNode
  hasBack?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-bottom: 1px solid ${vars.colorBourder};
  height: ${vars.heightHeader};
  padding: 0 16px;
  font-size: 18px;
  position: relative;
`
const Placeholder = styled.div`
  width: 24px;
  height: 24px;
  text-align: right;
`
const Action = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`

const Topbar: React.FC<TopbarProps> = props => {
  const goBack = () => {
    const { pathname } = history.location
    const backs: { [K: string]: string } = {}
    console.log(`pathname ${pathname}`)
    console.log(`backs`)
    console.log(backs)
    for (let key in backs) {
      const route = matchPath<{ [k: string]: string }>(pathname, { path: key, exact: true })
      console.log(`route ${route}`)
      if (!route) { continue; }
      console.log(`route ${route}`)
      return history.push(backs[key].replace(/:([^V]+)/g, (match, capture) => route.params[capture]))
    }
    history.goBack()
  }
  return <Wrapper>
    {props.hasBack ? <Icon name="left" onClick={goBack}/> : <Icon/>}
    <span>{props.title}</span>
    <Placeholder/>
    <Action>{props.action}</Action>
  </Wrapper>
}
Topbar.defaultProps = {
  hasBack: true
}
export default Topbar