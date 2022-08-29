import { configureStore } from '@reduxjs/toolkit';
import { authSlice, inputsSlice } from './Slices';



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer, 
    inputs: inputsSlice.reducer, 
  },
});
