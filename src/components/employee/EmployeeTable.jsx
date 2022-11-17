import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";

export default function EmployeeTable() {
  const employee = useSelector((state) => state.employee.listEmployee);
  const data = React.useMemo(() => employee, [employee]);
  console.log(data);

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

  return <DataTable columns={columns} data={data} theme="custom" pagination/>;
}
