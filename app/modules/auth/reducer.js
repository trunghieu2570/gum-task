import {
    AUTH_SUCCESS,
    AUTH_FAILED,
    AUTH_PENDING,
    RESET_ERROR_MESSAGE,
    VALIDATE_INPUT,
} from "./actionTypes" //Import the actions types constant we defined in our actions

let initialState = { user: null, error: null, pending: false, validate: [] };

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null,
                pending: false,
            }
        case AUTH_FAILED:
            return {
                ...state,
                error: action.error,
                user: null,
                pending: false,
            }
        case AUTH_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
                validate: []
            }
        case RESET_ERROR_MESSAGE:
            return {
                ...state,
                error: null,
                validate: []
            }
        default:
            return state;
    }
};