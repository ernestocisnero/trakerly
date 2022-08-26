import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', // authenticated, not-authenticated
    displayName: null,
    email: null,
    uid: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login: ( state, { payload } )=>{
            state.status = 'authenticated';
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.uid = payload.uid;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;
        },
        logout: ( state, { payload } )=>{
            state.status = 'not-authenticated';
            state.displayName = null;
            state.email = null;
            state.uid = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        authenticating: ( state )=>{
            state.status = 'checking';
        }
    }
});
export const { login, logout, authenticating } = authSlice.actions;