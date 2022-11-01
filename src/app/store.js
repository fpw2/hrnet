import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
