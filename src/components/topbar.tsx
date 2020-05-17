import React, { ReactNode } from 'react'
import styled from 'styled-components';

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
  const goBack = () => {}
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