import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'not-authenticated', // authenticated, checking
    displayName: null,
    email: null,
    uid: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auht',
    initialState,
    reducers: {
        login: ( state, { payload } )=>{

        },
        logout: ( state, { payload } )=>{

        },
        authenticating: ( state )=>{
            state.status = 'checking';
        }
    }
});
export const { login, logout, authenticating } = authSlice.actions;