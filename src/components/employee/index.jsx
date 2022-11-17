import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import Test from "./Test";

export default function EmployeeList() {

    
    
    return (
        <div id="employee-div" className="employee-container">
            <EmployeeTable  />
            <table id="employee-table" className="display"></table>
            <Link to="/home" className="link">Home</Link>
        </div>
    )
}