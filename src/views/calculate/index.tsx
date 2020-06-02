import * as React from 'react';
import Display from './display';
import CellPanel from './cellPanel';
import calculate from './calculate';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`

`

interface Props {
  onAdd: (value: number) => void
}

export interface Expression {
  total: string | null
  next: string | null
  operation: string | null
}

export const defaultExpression = { total: null, next: null, operation: null };

const Calculate: React.FunctionComponent<Props> = props => {
  const [expression, setExpression] = useState<Expression>(defaultExpression);
  const prevDataRef = useRef<Expression>(defaultExpression);
  const onPress = (value: string) => {
    prevDataRef.current = { ...prevDataRef.current, ...calculate(prevDataRef.current, value) };
    setExpression(prevDataRef.current);
    const sum: number = +result()
    if (value === '完成' && sum && sum !== 0) {
      props.onAdd(sum)
    }
  };
  const result = () => {
    if (expression.total && expression.operation) {
      return `${expression.total}${expression.operation}${expression.next || ''}`;
    }
    return expression.next || expression.total || '0';
  };
  return <Content>
    <Display value={result()}/>
    <CellPanel onPress={onPress}/>
  </Content>
};
export default Calculate;
