import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

import { login, logout } from '../store/auth';
import { startLoadingNote } from '../store/journal/thunks';

export const useCheckOut = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(startLoadingNote());
        });
    }, []);
    return {
        status
    };
};
