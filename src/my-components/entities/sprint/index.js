import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Sprint from './Sprint';
import CalendarSprint from "./CalendarSprint";

const Routes = ({match}) => (
  <>
    <Switch>
      <Route path={match.url} component={Sprint}/>
      <Route exact path={`${match.url}/calendar`} component={CalendarSprint}/>
    </Switch>
  </>
);

export default Routes;
