import EmployeeTable from "./EmployeeTable";

/**
 * Display a table with the list of employee
 * @returns html
 */
export default function EmployeeList() {
    
    return (
        <div id="employee-div" className="employee-container">
            <EmployeeTable  />
            <table id="employee-table" className="display"></table>
        </div>
    )
}