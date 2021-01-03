import {Route, Switch} from 'react-router-dom';
import React from 'react';

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route path={`/home`} component={HomePage}/>
                <Route path={`admin/login`} component={LoginPage}/>
                <Route path={`admin/`} component={AdminPage}/>
            </Switch>
        </>
    )
}