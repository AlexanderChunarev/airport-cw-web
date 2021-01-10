import {Route, Switch} from 'react-router-dom';
import React from 'react';
import MainPage from "../pages/mainPage/MainPage";
import ResultsPage from "../pages/detailsPage/components/resultsBoard/ResultsPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route exact path={`/`} component={MainPage}/>
                <Route exact path={`/results`} component={ResultsPage}/>
                {/*<Route path={`admin/login`} component={LoginPage}/>*/}
                {/*<Route path={`admin/`} component={AdminPage}/>*/}
            </Switch>
        </>
    )
}