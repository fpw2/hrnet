import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import { Button, ModalApp } from "modal-component-fpw";

export default function EmployeeList() {
    
    return (
        <div id="employee-div" className="employee-container">
            {/* <Button label= "nex" backgroundColor="blue"/> */}
            {/* <ModalApp /> */}
            <EmployeeTable  />
            <table id="employee-table" className="display"></table>
            <Link to="/home" className="link">Home</Link>
        </div>
    )
}