import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Note from './Note';


const Routes = ({match}) => (
    <>
        <Switch>
            <Route exact path={match.url} component={Note}/>
        </Switch>
    </>
);

export default Routes;