import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    input: '', //income or expense
    income: null,
    expense: null,
    category: '', // string describing the income/outcome source
    date: null 
}

export const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        income: (state, { payload } ) => {
            state.loading = false;
            state.input = payload.input;
            state.income = payload.income;
            state.expense = null;
            state.category = payload.category;
            state.date = payload.date;
        },
        expense: (state, { payload } ) => {
            state.loading = false;
            state.input = payload.input;
            state.income = null;
            state.expense = payload.expense;
            state.category = payload.category;
            state.date = payload.date;
        },
        loading:(state) =>{
            state.loading = true;
            state.input = null;
            state.income = null;
            state.expense = null;
            state.category = '';
            state.date = null;
        }
    }
});
export const { income, expense, loading } = inputsSlice.actions;