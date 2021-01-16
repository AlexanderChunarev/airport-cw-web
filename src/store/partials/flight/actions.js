import actions from '../actions-types';
import axios from "axios";
import {buildQueryString} from "../../../utils/QueryUtils";

export const fetchFlightsAction = (data) => {
    return {
        type: actions.FETCH_FLIGHTS,
        payload: data
    }
}

export const fetchFlights = (params) => {
    let queryString = buildQueryString(params);

    return async (dispatch) => {
        const result = await axios.get(`api/trips/query?${queryString}`);
        dispatch(fetchFlightsAction(result.data));
    }
}