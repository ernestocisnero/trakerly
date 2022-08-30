import { configureStore } from '@reduxjs/toolkit';
import { authSlice, dataSlice, inputsSlice } from './Slices';



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer, 
    inputs: inputsSlice.reducer, 
    data: dataSlice.reducer, 
  },
});
