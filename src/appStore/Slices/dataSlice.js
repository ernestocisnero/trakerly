import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadingData: false,
    income: [],
    expense: []
}

export const dataSlice = createSlice({
    name: 'data',

    initialState,

    reducers: {
        setIncomeData: (state, { payload } ) => {
            state.income = payload;
        },

        setExpenseData: (state, { payload } ) => {
            state.expense = payload;
        },
        
        loadingData: (state, { payload })=>{
            state.loadingData = payload;
        }
    }
});
export const { setIncomeData, setExpenseData, loadingData } = dataSlice.actions;