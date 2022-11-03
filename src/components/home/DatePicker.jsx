import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const HandleDatePicker = ({ id, label, placeholder }) => {
  const { control } = useFormContext();
  const [startDate, setStartDate] = useState("");

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({onChange, value }) => (
          <DatePicker
            className="input"
            placeholderText={placeholder}
            selected={value}
            onChange={(date) => setStartDate(date)}
            // onSelect={(e) => onSelect(e.value)}
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
        )}
      />
    </>
  );
};
