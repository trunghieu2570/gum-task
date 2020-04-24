import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_PENDING, RESET_ERROR_MESSAGE } from "./actionTypes" //Import the actions types constant we defined in our actions

let initialState = { user: null, error: null, pending: false };

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null,
                pending: false,
            }
        case REGISTER_FAILED:
            return {
                ...state,
                error: action.error,
                user: null,
                pending: false,
            }
        case REGISTER_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
            }
        case RESET_ERROR_MESSAGE:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};