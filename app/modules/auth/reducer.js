import { REGISTER_SUCCESS } from "./actionTypes" //Import the actions types constant we defined in our actions

let initialState = { user: null };

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
};