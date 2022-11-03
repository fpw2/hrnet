import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  listEmployee: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, {payload}) => {
      state.listEmployee.push(payload)
    }
  }
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
