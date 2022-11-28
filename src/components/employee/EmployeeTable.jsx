import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";

/**
 * Display a table 
 * @returns html
 */
export default function EmployeeTable() {
  const employee = useSelector((state) => state.employee.listEmployee);
  const data = React.useMemo(() => employee, [employee]);
  const [tableResult, setTableResult] = useState(employee);

  /**
   * Filter the table with the firstName
   * @param {e} event 
   */
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

  const customStyle= {
    headRow: {
      style: {
        width:"100%",
        fontSize: "14px",
        color:"var(--white)",
        name: <div>Case ID</div>
      },
    },
    tableCol: {
      whiteSpace: "pre-line",
      color: "var(--primary-2)",

    },
    rows: {
      style: {
        fontSize: "14px"
      },
  },
  pagination: {
    style: {
      minHeight: "80px",
      fontSize: "14px",
    },
    button: {
      color:'var(--white)',
      backgoundColor:"var(--white)",
      cursor: 'pointer',
    },
  },
}

  createTheme("custom", {
    text: {
      primary: "var(--primary-4)",
      // pagination
      secondary: "var(--white)",
    },
    background: {
      default: "var(--primary-2)",
    },
    // line
    divider: {
      default: "var(--primary-1)",
    },
  })


  return (
  <div className="table">
    {data.length > 0 &&
      <div className="table-header">
        <h2 className="table-title">Current employee</h2>
        <div className="table-search">
          <label htmlFor="table-search">Search:</label>
          <input onChange={onChange} type="text" placeholder="Search by First Name" className="search" name="table-search"/>
        </div>
      </div>
    }
    <DataTable 
      // title="Current employee"
      columns={columns} 
      data={tableResult} 
      theme="custom" 
      customStyles={customStyle}
      pagination
    />
  </div>
  )
}
