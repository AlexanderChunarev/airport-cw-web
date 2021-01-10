import actions from '../actions-types';

const initialState = {
    countries: [
        {
            "id": 0,
            "name": "",
        }
    ],
    airports: [
        {
            "id": 0,
            "name": "",
        }
    ]
}

export const countries = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_COUNTRIES:
            return {
                ...state, countries:
                    state.countries = action.payload
            }
        case actions.FETCH_AIRPORTS:
            return {
                ...state, airports:
                    state.airports = action.payload
            }
        default:
            return state
    }
}
