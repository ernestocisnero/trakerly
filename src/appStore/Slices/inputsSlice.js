import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    input: '', //income or expenses
    category: '', // string describing the income/outcome source
    date: '' 
}

export const inputsSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        income: (state, { payload } ) => {
            state.input = payload.input;
            state.category = payload.category;
            state.date = payload.date;
        },
        outcome: (state, { payload } ) => {
            state.input = payload.input;
            state.category = payload.category;
            state.date = payload.date;
        },
    }
});
export const { income, outcome } = inputsSlice.actions;