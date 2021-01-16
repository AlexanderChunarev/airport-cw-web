import {Route, Switch} from 'react-router-dom';
import React from 'react';
import MainPage from "../pages/mainPage/MainPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route exact path={`/`} component={MainPage}/>
                {/*<Route path={`admin/login`} component={LoginPage}/>*/}
                {/*<Route path={`admin/`} component={AdminPage}/>*/}
            </Switch>
        </>
    )
}