import React from 'react';
import Layout from '../components/layout';
import { withRouter, RouteComponentProps, useLocation } from 'react-router-dom';
import { HashQuery } from '../lib/getQuery';
import styled from 'styled-components';

import Icon from '../components/icon';
import { IconName } from '../components/iconName'
import { ShapedDiv } from '../components/shapedDiv'
import { useCostType } from '../hooks/useCostType';

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

const CostType = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Section = styled.section`
  margin: 12px 0;
`

const Title = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 12px;
`
const CostTypeItem = styled.div`
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8px;
  &:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
  }
`
export const _CostTypeCreate: React.FC<RouteComponentProps> = (props) => {
  const query = new HashQuery<{ type: 'earn' | 'expense' }>(props.location)
  const type = query.get('type') || 'expense'
  const map = {
    earn: '收入',
    expense: '支出',
  };
  const title = `添加${map[type as keyof typeof map]}类别`;

  const { costType } = useCostType(0)
  console.log(useLocation());
  const onItemClick = (item: CostType, index: number) => {
    // todo
  }
  return <Layout title={title} footer={false}>
    <TopInput>
      <ShapedDiv>
        <Icon name="left"/>
      </ShapedDiv>
      <input type="text" placeholder="输入类别名称(不超过四个汉字)"/>
    </TopInput>
    <Section>
      <Title>娱乐</Title>
      <CostType>
        {costType && costType.length > 0 && costType.map((cost, index) => (
          <CostTypeItem key={cost.id} onClick={() => onItemClick(cost, index)}>
            <ShapedDiv>
              <Icon name={cost.icon}/>
            </ShapedDiv>
          </CostTypeItem>
        ))}
      </CostType>
    </Section>
    <Section>
      <Title>饮食</Title>
      <CostType>
        {costType && costType.length > 0 && costType.map((cost, index) => (
          <CostTypeItem key={cost.id} onClick={() => onItemClick(cost, index)}>
            <ShapedDiv>
              <Icon name={cost.icon}/>
            </ShapedDiv>
          </CostTypeItem>
        ))}
      </CostType>
    </Section>
  </Layout>;
};
export const CostTypeCreate = withRouter(_CostTypeCreate);