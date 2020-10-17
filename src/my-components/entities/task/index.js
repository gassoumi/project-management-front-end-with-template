import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Task from './Task';
import TaskUpdate from './TaskUpdate'
import TaskDetail from "./TaskDetail";
import Task from './Task';

const Routes = ({match}) => (
  <>
    <Switch>
      <Route exact path={match.url} component={Task}/>
      <Route exact path={`${match.url}/create`} component={TaskUpdate}/>
      <Route exact path={`${match.url}/:id`} component={TaskDetail}/>
      <Route exact path={`${match.url}/:id/edit`} component={TaskUpdate}/>
    </Switch>
  </>
);

export default Routes;
