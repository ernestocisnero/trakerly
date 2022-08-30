import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingData: false,
    data: [

    ]
}

export const dataSlice = createSlice({
    name: 'data',

    initialState,

    reducers: {
        setData: (state, { payload } ) => {
            state.data.push( payload );
        },

        loadingData: (state, { payload })=>{
            state.loadingData = payload;
        }
    }
});
export const { setData, loadingData } = dataSlice.actions;