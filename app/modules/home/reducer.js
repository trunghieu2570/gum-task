import { DATA_AVAILABLE } from "./actions" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
export default dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};