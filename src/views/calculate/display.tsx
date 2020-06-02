import * as React from "react";
import styled from 'styled-components';

const DailyDisplay = styled.div`
  line-height: 36px;
  padding: 4px 8px;
  text-align: right;
  font-size: 18px;
  background: #f2f2f2;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`

interface Props {
  value:string
}

const Display: React.FunctionComponent<Props> = props => {
  return (
    <DailyDisplay>{props.value}</DailyDisplay>
  );
}
export default Display
