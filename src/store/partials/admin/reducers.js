import actions from '../actions-types';

const initialState = { }

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}
