import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";

export default function EmployeeList() {
    
    return (
        <div id="employee-div" className="employee-container">
            <EmployeeTable  />
            <table id="employee-table" className="display"></table>
            <Link to="/" className="link">Home</Link>
        </div>
    )
}