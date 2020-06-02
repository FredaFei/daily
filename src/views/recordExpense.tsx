import React, { useState } from 'react';
import { RecordLayout } from './record.layout';
import { useCostType } from '../hooks/useCostType';
import styled from 'styled-components';
import Icon from '../components/icon';
import { IconName } from '../components/iconName'
import { ShapedDiv } from '../components/shapedDiv'
import Calculate from './calculate/index'

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
  const [visibleCalculate, setVisibleCalculate] = useState(false)
  console.log(costType);
  const onItemClick = (item: CostType, index: number) => {
    if (costType && costType.length && (index + 1)) {
      // todo create types
      return
    }
    console.log('item');
    open()
  }
  const open = () => {
    setVisibleCalculate(true)
  }
  const close = () => {
    setVisibleCalculate(false)
  }
  const onAddRecord = () => {
    //  ajax
    close()
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
    {visibleCalculate && <Calculate onAdd={onAddRecord}/>}
    {/*<Calculate onAdd={onAddRecord}/>*/}
  </RecordLayout>
}