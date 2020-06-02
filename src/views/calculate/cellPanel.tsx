import * as React from 'react';
import { range } from '../../lib/collection';
import Cell from './cell';

import styled from 'styled-components';

const DailyPanel = styled.div`
  border: 1px solid #ddd;
  border-top: none;
`
const DailyPanelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  &:last-child{
     border-bottom: none;
  }
`
interface Props {
  onPress: (k: string) => void
}

const calculateMap = [
  { name: 'AC', className: '' },
  // {name: '+/-', className: ''},
  { name: 'CE', className: 'gray' },
  { name: '%', className: '' },
  { name: '÷', className: 'gray' },
  { name: '7', className: '' },
  { name: '8', className: '' },
  { name: '9', className: '' },
  { name: 'x', className: 'gray' },
  { name: '4', className: '' },
  { name: '5', className: '' },
  { name: '6', className: '' },
  { name: '+', className: 'gray' },
  { name: '1', className: '' },
  { name: '2', className: '' },
  { name: '3', className: '' },
  { name: '-', className: 'gray' },
  { name: '.', className: '' },
  { name: '0', className: '' },
  { name: '=', className: 'yellow' },
  { name: '完成', className: 'yellow' },
];
const CellPanel: React.FunctionComponent<Props> = props => {
  const onCellPress = (name: string) => {
    props.onPress(name);
  };
  return (
    <DailyPanel>
      {
        range(0, 4).map(row => (
          <DailyPanelRow key={`row-${row}`}>
            {
              range(0, 3).map(col => {
                const item = calculateMap[row * 4 + col];
                return <Cell key={item.name} name={item.name} onPress={onCellPress} class={item.className}/>;
              })
            }
          </DailyPanelRow>
        ))

      }
    </DailyPanel>
  );
};
export default CellPanel;
