import React from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { states } from "../../data/states";
import { departments } from "../../data/departments";

const optionState = states.map((state) => {
  const option = {
    value: state["abbreviation"],
    label: state["name"],
  };
  return option;
});

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    borderRadius: "0px",
    borderStyle: "none",
    borderLeft: "7px solid var(--neutral-4)",
    padding: "3px 0px",
    ":hover": {
      borderColor: "var(--primary-1)",
    },
  }),

  input: (provided, state) => ({
    ...provided,
    "::placeholder": {
      color: "red",
    },
    ":focus": {
      borderColor: "var(--primary-1)",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--primary-4)" : state.isSelected ? "var(--primary-1)" : undefined,
  }),

  
};

export default function HandleSelect({ id, label }) {
  const { control } = useFormContext();

  let options;
  if (id === "state") options = optionState;
  if (id === "department") options = departments;

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            id={id}
            styles={customStyles}
            className="select-container"
            classNamePrefix="select"
            onChange={(e) => onChange(e.value)}
            options={options}
          />
        )}
      />
    </>
  );
}
