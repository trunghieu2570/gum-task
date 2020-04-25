import auth from '@react-native-firebase/auth';
import { actionRegisterSuccess, actionAuthFailed, actionAuthPending, actionLoginSuccess } from './actions';

export function register(email, password) {
    return (dispatch) => {
        dispatch(actionAuthPending());
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(actionRegisterSuccess(user))
                console.log('User account created & signed in!');
                dispatch(actionLoginSuccess(user));
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        dispatch(actionAuthFailed('That email address is already in use!'));
                        break;
                    case 'auth/invalid-email':
                        dispatch(actionAuthFailed('That email address is invalid!'));
                        break;
                    default:
                        dispatch(actionAuthFailed(error.code));
                        break;
                }

            });
    }

}

export function login(email, password) {
    return dispatch => {
        dispatch(actionAuthPending());
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('signed in!');
                dispatch(actionLoginSuccess(user));
            })
            .catch(error => {
                dispatch(actionAuthFailed(error.code));
                console.error(error);
            });
    }
}

