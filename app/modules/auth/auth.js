import auth from '@react-native-firebase/auth';
import { actionRegisterSuccess } from './actions';

export function register(email, password) {
    return (dispatch) => {
        console.log("pass r");
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(actionRegisterSuccess(user))
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
}

