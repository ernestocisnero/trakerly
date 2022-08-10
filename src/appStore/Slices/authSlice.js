import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: 'not-authenticated', // authenticated, checking
    name: null,
    email: null,
    uid: null,
    photoURL: null,
    isLoading: null
}

export const authSlice = createSlice({
    name: 'auht',
    initialState,
    reducers: {
        login: ( state, { payload } )=>{

        },
        logout: ( state, { payload } )=>{

        },
        authenticating: ( state, { payload } )=>{

        }
    }
});
export const { login, logout, authenticating } = authSlice.actions;