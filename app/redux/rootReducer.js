import {combineReducers} from 'redux';
import homeReducer from '../modules/home/reducer';
import taskReducer from '../modules/tasklist/reducer';
import authReducer from '../modules/auth/reducer';

export default rootReducer = combineReducers({
    homeReducer,
    taskReducer,
    authReducer,
});