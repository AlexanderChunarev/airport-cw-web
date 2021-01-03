import actions from '../actions-types';
import axios from "axios";

export const loginUserAction = (data) => {
    return {
        type: actions.LOGIN,
        payload: data
    }
}

export const login = (data) => {
    return (dispatch) => {
        axios.post(`api/account/authenticate`, data)
            .then(response => {
                document.cookie = `token=${response.data.token}`
                dispatch(loginUserAction(response.data))
            })
    }
}