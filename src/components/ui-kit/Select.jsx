import React, { useState } from 'react';
import Select from 'react-select';
import { states } from "../../data/states"

const optionsState = [
  { value: 'fraise', label: 'Fraise' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanill', label: 'Vanilla' },
];

const optionsDepartment = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'human Reources', label: 'Human Reources' },
  { value: 'legal', label: 'Legal' },
 
];

// const options = states.forEach(state => {
//   const option = {
//     value: state["name"].toLowerCase() ,
//     label: state["name"]
//   }
//   console.log(option)
//   return option
// })

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
      color: "red"
    },
    ":focus": {
      borderColor: "var(--primary-1)", 
    }

  }),
  
 
  option: (provided, state) => ({
    ...provided,
    backgroudColor: state.isSelected && "red",
    ":hover": {
      backgroudColor: !state.isSelected && "rgba(90,111,7,0.2)" 
    }
  
  })
}

export default function HandleSelect({id, label}) {
  const [selectedOption, setSelectedOption] = useState(null);

  let options
  if(id === "state") options = optionsState
  if(id === "department") options = optionsDepartment
 
  return (<>
    <label htmlFor={id} className="label">{label}</label>
    <Select 
      styles={customStyles}
      className="select-container"
      classNamePrefix="select"
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  </>);
}

// import clsx from "clsx"

// export default function Select({id, className, placeholder, required, ...rest}) {

//     const classNames = clsx("select", className) // "input": true => allways this class
    
//     return (<>
//         
//         <select 
//             id={id}
//             className={classNames}
//             placeholder={placeholder} 
//             required={required} 
//             {...rest}
//         />
//     </>)
// }