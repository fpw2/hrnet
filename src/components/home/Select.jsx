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
    // this line disable the default color of the border
    boxShadow: "none",
    borderRadius: "0px",
    borderStyle: "none",
    borderLeft: "7px solid var(--neutral-4)",
    padding: "3px 0px",
    ":hover": {
      borderColor: "var(--primary-1)",
    },
    ":focus": {
      borderColor: state.isFocused ? "var(--primary-4)" : state.isSelected ? "var(--primary-1)" : undefined,
    }
  }),

  input: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "var(--primary-4)" : "var(--primary-1)" ,


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
            aria-label = "choose an option"
            className="select-container"
            classNamePrefix="select"
            onChange={onChange}
            options={options}
            required
          />
        )}
      />
    </>
  );
}
