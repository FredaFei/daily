import styled from 'styled-components';
import vars from '_vars.scss';
import { SizedButton } from './sizedButton'

const MainButton = styled(SizedButton)`
  border: none;
  border-radius: ${vars.borderRadius};
  background: ${vars.colorMain};
  color: #333;
  &[disabled]{
    color: #999999;
    background: #ddd;
  }
`
export { MainButton }