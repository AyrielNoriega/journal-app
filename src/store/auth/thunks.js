import { signInWithGoogle } from '../../firebase';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthencation = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (result.ok) {
            dispatch(login(result));
        } else {
            return dispatch(logout(result));
        }
    };
};
