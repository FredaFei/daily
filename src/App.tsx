import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import { SWRConfig } from 'swr'
import { SignIn } from './views/signIn'
import { Home } from './views/home'
import { RecordDetail } from './views/recordDetail'
import { RecordCreate } from './views/recordCreate'
import { RecordEdit } from './views/recordEdit'
import { CostTypeCreate } from './views/costTypeCreate'
import { CostTypes } from './views/costTypes'
import { Me } from './views/me'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

function App() {
  return (
    <Wrapper>
      <SWRConfig value={{ shouldRetryOnError: false }}>
        <Router>
          <Switch>
            <Route exact path="/signIn"><SignIn/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/record/create"><RecordCreate/></Route>
            <Route exact path="/record/:id"><RecordDetail/></Route>
            <Route exact path="/record/:id/edit"><RecordEdit/></Route>
            <Route exact path="/costTypes"><CostTypes/></Route>
            <Route exact path="/costType/create"><CostTypeCreate/></Route>
            <Route exact path="/me"><Me/></Route>
            <Redirect exact from="/" to="/home"/>
            <Route path="*"></Route>
          </Switch>
        </Router>
      </SWRConfig>
    </Wrapper>
  );
}

export default App;
