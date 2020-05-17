import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import { SWRConfig } from 'swr'
import { Home } from './views/home'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

function App() {
  return (
    <Wrapper>
      <SWRConfig value={{shouldRetryOnError: false}}>
        <Router>
          <Switch>
            <Route exact path="/home"><Home/></Route>
            <Redirect exact from="/" to="/home"/>
          </Switch>
        </Router>
      </SWRConfig>
    </Wrapper>
  );
}

export default App;
