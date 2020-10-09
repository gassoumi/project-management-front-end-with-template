import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Problem from './Problem';
import ProblemUpdate from "./ProblemUpdate";


const Routes = ({match}) => (
    <>
        <Switch>
            <Route exact path={match.url} component={Problem}/>
            <Route exact path={`${match.url}/create`} component={ProblemUpdate}/>
            <Route exact path={`${match.url}/:id/edit`} component={ProblemUpdate}/>
        </Switch>
    </>
);

export default Routes;