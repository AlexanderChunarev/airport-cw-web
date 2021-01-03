import {combineReducers} from "redux";
import {login} from '../partials/admin/reducers';

export const appReducer = combineReducers({
    login: login,
}); 
