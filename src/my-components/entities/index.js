import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Project from './project';
import Sprint from './sprint';
import Task from './task';
import Document from './document';
import Note from './note';
import Problem from './problem';
import {tokenConfig} from "../../utils";
import {returnErrors} from "../../redux/actions/messages";
import * as Selector from "../../redux/selectors";
import Discussion from './discussion';
import Dashboard from '../dashboard';

// add all entities here
const Routes = (props) => {
  const {match} = props;

  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path={`${match.url}project`} component={Project}/>
      <Route path={`${match.url}sprint`} component={Sprint}/>
      <Route path={`${match.url}task`} component={Task}/>
      <Route path={`${match.url}document`} component={Document}/>
      <Route path={`${match.url}discussion`} component={Discussion}/>
      <Route path={`${match.url}note`} component={Note}/>
      <Route path={`${match.url}problem`} component={Problem}/>
      {/*<Redirect to="*"/>*/}
    </Switch>

  );
};

export {tokenConfig, returnErrors, Selector}


export default Routes;
