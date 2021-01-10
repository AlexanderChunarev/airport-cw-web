import actions from '../actions-types';
import axios from "axios";

export const fetchCountriesAction = (data) => {
    return {
        type: actions.FETCH_COUNTRIES,
        payload: data
    }
}

export const fetchAirportsAction = (data) => {
    return {
        type: actions.FETCH_AIRPORTS,
        payload: data
    }
}

export const fetchCountries = (pattern) => {
    return async (dispatch) => {
        const countries = await axios.get(`api/countries?pattern=${pattern}`)
        const airports = await axios.get(`api/airports?pattern=${pattern}`)
        dispatch(fetchCountriesAction(countries.data))
        dispatch(fetchAirportsAction(airports.data))
    }
}