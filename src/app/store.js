import {
  configureStore
} from '@reduxjs/toolkit';
import employeeReducer from '../features/counter/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});