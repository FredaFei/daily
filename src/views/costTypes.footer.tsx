import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icon';
import { history } from '../lib/history'

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-top: 1px solid #ddd;
`

interface Props {
  type: 'earn' | 'expense'
}

export const CostTypesFooter = (props: Props) => {
  const onClickFooter = () => {
    const { type } = props
    history.push({ pathname: `/costType/create/${type}`, search: `?type=${type}` })
  }
  return <Footer onClick={onClickFooter}><Icon name="left"/>添加类别</Footer>
}
