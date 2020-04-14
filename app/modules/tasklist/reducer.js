import { GET_TASKS } from "./actionTypes" //Import the actions types constant we defined in our actions

let initialState = { tasks: [], loading: true };

export default taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false,
            }
        default:
            return state;
    }
};