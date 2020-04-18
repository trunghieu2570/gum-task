import { REGISTER_SUCCESS } from './actionTypes';

export function actionRegisterSuccess(user) {
    console.log(user);
    return {
        type: REGISTER_SUCCESS,
        user,
    }
}