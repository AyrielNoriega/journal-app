import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            // Redux Toolkit allows us to write 'mutating' logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a 'draft state' and produces a brand new
            // immutable state based off those changes
            state.counter += 1;
        },
        logout: (state, action) => {
            state.counter -= 1;
        },
        checkingCredentials: (state, action) => {
            state.counter += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

// export default authSlice.reducer;
