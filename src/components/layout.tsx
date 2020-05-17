import React, { ReactNode } from 'react'
import styled from 'styled-components';
import Topbar, { TopbarProps } from './topbar'

interface LayoutProps extends TopbarProps {
  footer?: ReactNode
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Footer = styled.div`
  flex-grow: 0;
  margin-top: auto;
`

const Layout: React.FC<LayoutProps> = props => {
  return <Wrapper>
    <Topbar title={props.title} action={props.action} hasBack={props.hasBack}></Topbar>
    <Main>{props.children}</Main>
    <Footer>{props.footer}</Footer>
  </Wrapper>
}
export default Layout