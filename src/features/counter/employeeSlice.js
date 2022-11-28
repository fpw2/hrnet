import { createSlice } from "@reduxjs/toolkit";

const listEmployee = localStorage.getItem("employee") 

const initialState = {
  listEmployee: listEmployee ? JSON.parse(listEmployee) : [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, {payload}) => {
      state.listEmployee.push(payload)
      localStorage.setItem("employee",JSON.stringify(state.listEmployee)) // convert JavaScript to JSON string
    }
  }
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
