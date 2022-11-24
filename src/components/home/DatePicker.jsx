import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Display a date picker
 * @param {id, label, placeholder} 
 * @returns html 
 */
export const HandleDatePicker = ({ id, label, placeholder }) => {
  const { control } = useFormContext();

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            className="input"
            placeholderText={placeholder}
            selected={value}
            onChange={onChange}
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
            required
          />
        )}
      />
    </>
  );
};
