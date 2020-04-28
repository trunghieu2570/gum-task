import { GET_TASKS, TITLE_BAR_TOUCH_TITLE, GET_TASKS_SHEET } from "./actionTypes" //Import the actions types constant we defined in our actions

let initialState = {
    tasks: [],
    taskSheets: [],
    loading: true,
    showTaskSheet: false
};

export default taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS_SHEET:
            return {
                ...state,
                sheets: action.sheets,
                loading: false,
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false,
            }
        case TITLE_BAR_TOUCH_TITLE:
            console.log(!state.showTaskSheet);
            return {
                ...state,
                showTaskSheet: !state.showTaskSheet,
            }
        default:
            return state;
    }
};