import actions from '../actions-types';
import axios from "axios";

export const fetchFlightsAction = (data) => {
    return {
        type: actions.FETCH_FLIGHTS,
        payload: data
    }
}

export const fetchFlights = (params) => {
    let queryString = `?departureId=${params.departureId}&arriveId=${params.arriveId}`
    queryString = "?departureId=4&arriveId=8"

    return async (dispatch) => {
        const result = await axios.get(`api/trips${queryString}`)
        dispatch(fetchFlightsAction(result.data))
    }
}