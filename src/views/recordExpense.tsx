import React from 'react';
import { RecordLayout } from './record.layout';
import { useCostType } from '../hooks/useCostType';
import styled from 'styled-components';
import Icon from '../components/icon';
import { IconName } from '../components/iconName'
import { ShapedDiv } from '../components/shapedDiv'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`
const Item = styled.div`
  display: block;
  width: 24%;
  &:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8px;
`
export const RecordExpense: React.FC = props => {
  const { costType } = useCostType(0)
  const onItemClick = (item: CostType, index: number) => {
    if ((index + 1) === costType?.length) {
      // todo create types
      return
    }
    // todo record
  }
  return <RecordLayout title="record edit">
    <List>
      {costType && costType.length > 0 && costType.map((cost, index) => (
        <Item key={cost.id} onClick={() => onItemClick(cost, index)}>
          <ShapedDiv>
            <Icon name={cost.icon}/>
          </ShapedDiv>
          <IconName>{cost.name}</IconName>
        </Item>
      ))}
    </List>

  </RecordLayout>
}