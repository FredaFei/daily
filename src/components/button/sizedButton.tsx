import styled from 'styled-components';
import vars from '_vars.scss';
import { UnstyledButton } from './unstyledButton'

const SizedButton = styled(UnstyledButton)`
  height: 40px;
  padding: 0 16px;
  flex-grow: 1;
  white-space: nowrap;
  color: #333;
  font-size: 18px;
  position: relative;
  border: none;
  border-radius: ${vars.borderRadius};
  > .badge{
    position: absolute; 
    bottom: 100%;
    left: 100%;
    font-size: 12px;
    background: ${vars.colorDanger};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    transform: translate(-50%,50%);
  }
  &.size-small{
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  }
`
export { SizedButton }