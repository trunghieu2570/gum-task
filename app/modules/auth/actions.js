import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_PENDING, RESET_ERROR_MESSAGE, LOGIN_SUCCESS } from './actionTypes';
import { navigate } from '../../Navigation';


export function actionRegisterSuccess(user) {
    console.log(`register ${user.user.email}`);
    return {
        type: REGISTER_SUCCESS,
        user,
    }
}

export function actionLoginSuccess(user) {
    console.log(`login ${user.user.email}`);
    try {
        navigate('TaskList');
    } catch (err) {
        console.log(err);
    }
    return {
        type: LOGIN_SUCCESS,
        user,
    }
}

export function actionRegisterFailed(error) {
    return {
        type: REGISTER_FAILED,
        error,
    }
}

export function actionRegisterPending() {
    return {
        type: REGISTER_PENDING,
    }
}

export function actionResetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE,
    }
}