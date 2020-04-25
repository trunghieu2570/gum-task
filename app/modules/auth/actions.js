import {
    AUTH_SUCCESS,
    AUTH_FAILED,
    AUTH_PENDING,
    RESET_ERROR_MESSAGE,
} from './actionTypes';
import * as Navigator from '../../Navigator';


export function actionResetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE,
    }
}

export function actionAuthFailed(error) {
    return {
        type: AUTH_FAILED,
        error,
    }
}

export function actionAuthPending() {
    return {
        type: AUTH_PENDING,
    }
}

//login actions
export function actionLoginSuccess(user) {
    console.log(`login ${user.user.email}`);
    try {
        Navigator.replace('TaskList');
    } catch (err) {
        console.log(err);
    }
    return {
        type: AUTH_SUCCESS,
        user,
    }
}

//register actions
export function actionRegisterSuccess(user) {
    console.log(`register ${user.user.email}`);
    return {
        type: AUTH_SUCCESS,
        user,
    }
}
