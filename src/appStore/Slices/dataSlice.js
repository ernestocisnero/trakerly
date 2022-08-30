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
            state.income.push( payload );
        },

        setExpenseData: (state, { payload } ) => {
            state.expense.push( payload );
        },
        
        loadingData: (state, { payload })=>{
            state.loadingData = payload;
        }
    }
});
export const { setIncomeData, setExpenseData, loadingData } = dataSlice.actions;