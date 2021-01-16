import {combineReducers} from "redux";
import {login} from '../partials/admin/reducers';
import {countries} from "../partials/country/reducers";
import {flights} from "../partials/flight/reducers";

export const appReducer = combineReducers({
    login: login,
    countries: countries,
    flights: flights
}); 
