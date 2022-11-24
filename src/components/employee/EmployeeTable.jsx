import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import { set } from "react-hook-form";

export default function EmployeeTable() {
  const employee = useSelector((state) => state.employee.listEmployee);
  const data = React.useMemo(() => employee, [employee]);
  const [tableResult, setTableResult] = useState(employee);

  const onChange = async (e) => {
    // eslint-disable-next-line array-callback-return
    const searchFirstname = await data.filter(employee => {
      if (
        employee.firstName
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return employee
      } 

    });
    console.log(searchFirstname)
    if(searchFirstname.length === 0){ 
        setTableResult(data)
    } else {
      setTableResult(searchFirstname);

    }
  };

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,

    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  useEffect(() => {}, [tableResult]);

  createTheme("custom", {
    text: {
      primary: "var(--white)",
      // pagination
      secondary: "var(--primary-5)",
    },
    background: {
      default: "var(--primary-2)",
    },
    // line
    divider: {
      default: "var(--primary-3)",
    },
  })


  return (
  <div className="table">
    <div className="table-search">
      <label htmlFor="table-search">Search:</label>
      <input onChange={onChange} type="text" placeholder="Search by First Name" className="search" name="table-search"/>
    </div>
    <DataTable 
      columns={columns} 
      data={tableResult} 
      theme="custom" 
      pagination
    />
  </div>
  )
}
