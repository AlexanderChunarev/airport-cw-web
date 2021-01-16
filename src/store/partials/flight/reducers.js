import actions from '../actions-types';

const initialState = []

export const flights = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_FLIGHTS:
            return action.payload
        default:
            return state
    }
}
