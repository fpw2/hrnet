import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const HandleDatePicker = ({id, label, placeholder}) => {

  const [startDate, setStartDate] = useState("");

  return (<>
    <label htmlFor={id} className="label">{label}</label>
    <DatePicker 
      id={id}
      className="input"
      placeholderText={placeholder}
      selected= {startDate}
      onChange={(date) => setStartDate(date)} 
      dateFormat="dd/MM/yyyy"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [0, -25],
          },
        },  
      ]}
    />
  </>);
};
