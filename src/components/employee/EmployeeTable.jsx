import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    .pagination {
      padding: 0.5rem;
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function EmployeeTable() {
  const employee = useSelector((state) => state.employee.listEmployee);
  console.log(employee);
  const data = React.useMemo(() => employee, [employee]);

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName", // accessor is the "key" in the data
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  return (
    <>
      {employee.length === 0 ? (
        <p>No employee available</p>
      ) : (
        <Styles>
          <Table columns={columns} data={data} />
        </Styles>
      )}
    </>
  );
}
