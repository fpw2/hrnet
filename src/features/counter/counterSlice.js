import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
};


export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, {payload}) => {
      state.list.push(...payload)
    }
  }
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
