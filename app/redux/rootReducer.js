import {combineReducers} from 'redux';
import homeReducer from '../modules/home/reducer';
import taskReducer from '../modules/tasklist/reducer';

export default rootReducer = combineReducers({
    homeReducer,
    taskReducer,
});