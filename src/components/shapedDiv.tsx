import styled from 'styled-components';

export const ShapedDiv = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #ddd;
  &.active{
    background: #faad14;
  }
`