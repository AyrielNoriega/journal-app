import { signInWithGoogle } from '../../firebase';
import { checkingCredentials } from './authSlice';

export const checkingAuthencation = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        const result = await signInWithGoogle();

        if (result.ok) {
            dispatch(checkingCredentials(result));
        } else {
            console.log(result);
        }
    };
};
