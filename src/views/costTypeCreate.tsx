import React from 'react';
import Layout from '../components/layout';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { HashQuery } from '../lib/getQuery';
import styled from 'styled-components';

import Icon from '../components/icon';
import { IconName } from '../components/iconName'
import { ShapedDiv } from '../components/shapedDiv'

const TopInput = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  input{
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
    padding: 4px 0;
    border: none;
    border-bottom: 1px solid #333;
    background: transparent;
    &:focus{
      outline: none;
      border-bottom-color: #faad14;
    }
  }
`
const CostTypeItem = styled.div`

`
export const _CostTypeCreate: React.FC<RouteComponentProps> = (props) => {
  const query = new HashQuery<{ type: 'earn' | 'expense' }>(props.location)
  const type = query.get('type') || 'expense'
  const map = {
    earn: '收入',
    expense: '支出',
  };
  const title = `添加${map[type as keyof typeof map]}类别`;
  return <Layout title={title} footer={false}>
    <TopInput>
      <ShapedDiv>
        <Icon name="left"/>
      </ShapedDiv>
      <input type="text" placeholder="输入类别名称(不超过四个汉字)"/>
    </TopInput>
    <CostTypeItem></CostTypeItem>
  </Layout>;
};
export const CostTypeCreate = withRouter(_CostTypeCreate);