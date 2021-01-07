import {Route, Switch} from 'react-router-dom';
import React from 'react';
import MainPage from "../pages/mainPage/MainPage";
import DetailsPage from "../pages/detailsPage/DetailsPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route exact path={`/`} component={MainPage}/>
                <Route exact path={`/results`} component={DetailsPage}/>
                {/*<Route path={`admin/login`} component={LoginPage}/>*/}
                {/*<Route path={`admin/`} component={AdminPage}/>*/}
            </Switch>
        </>
    )
}