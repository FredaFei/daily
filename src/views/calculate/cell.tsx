import * as React from 'react';
import styled from 'styled-components';

const CellBox = styled.div`
  width: 25%;
  flex: 1;
  padding: 16px 0;
  font-size: 18px;
  color: $color;
  text-align: center;
  border-left: 1px solid #ddd;

  &:first-child {
    border-left: none;
  }

  &.yellow {
    background: yellow;
  }

  &.gray {
    //background: #ccc;
  }
`

interface Props {
  name: string
  onPress: (k: string) => void
  class: string
}

const Cell: React.FunctionComponent<Props> = props => {
  const onCellClick = () => {
    props.onPress(props.name);
  };
  return (
    <CellBox className={props.class} onClick={onCellClick}>{props.name}</CellBox>
  );
};
export default Cell;
