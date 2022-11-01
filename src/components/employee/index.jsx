import { Link } from "react-router-dom";

export default function EmployeeList() {
    return (
        <div id="employee-div" className="employee-container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/home">Home</Link>
        </div>
    )
}