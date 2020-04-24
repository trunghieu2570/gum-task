import auth from '@react-native-firebase/auth';
import { actionRegisterSuccess, actionRegisterFailed, actionRegisterPending, actionLoginSuccess } from './actions';

export function register(email, password) {
    return (dispatch) => {
        dispatch(actionRegisterPending());
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
                        dispatch(actionRegisterFailed('That email address is already in use!'));
                        break;
                    case 'auth/invalid-email':
                        dispatch(actionRegisterFailed('That email address is invalid!'));
                        break;
                    default:
                        dispatch(actionRegisterFailed(error.code));
                        break;
                }

            });
    }

}

