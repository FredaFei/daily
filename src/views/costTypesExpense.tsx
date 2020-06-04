import React, { useState } from 'react';
import { CostTypesLayout } from './costTypes.layout';
import { useCostType } from '../hooks/useCostType';
import styled from 'styled-components';
import Icon from '../components/icon';
import { IconName } from '../components/iconName'
import { ShapedDiv } from '../components/shapedDiv'
import { CostTypesFooter } from './costTypes.footer';
import { useLocation } from 'react-router-dom';

const List = styled.div`
  padding-left: 8px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 0;
  &+&{
    border-top: 1px solid #ddd;
  }
  .actions{margin-right: 12px;}
  .name{margin-left: 8px;}
`
export const CostTypesExpense: React.FC = props => {
  const { costType } = useCostType(0)
  const onItemClick = (item: CostType, index: number) => {
    // todo
  }
  return <CostTypesLayout title="类别设置" footer={<CostTypesFooter type="expense"/>}>
    <List>
      {costType && costType.length > 0 && costType.map((cost, index) => (
        <Item key={cost.id} onClick={() => onItemClick(cost, index)}>
          <Icon name="left" className="actions"/>
          <ShapedDiv>
            <Icon name={cost.icon}/>
          </ShapedDiv>
          <IconName className="name">{cost.name}</IconName>
        </Item>
      ))}
    </List>
  </CostTypesLayout>
}