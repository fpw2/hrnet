import Input from "../ui-kit/Input"
import Button from "../ui-kit/Button"
import { HandleDatePicker } from "./DatePicker"

export default function Home() {
    return(
        <div className="page-employee">
            <div>
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <form id="create-employee">
                    <Input 
                        id="first-name"
                        placeholder="First Name"
                        required="required"
                    />
                    <Input 
                        id="first-name"
                        placeholder="Last Name"
                    />               
                    <HandleDatePicker 
                        id="date-of-birth"
                        label="Date of birth"
                        placeholder="Click to select a date"
                    /> 
                    <HandleDatePicker 
                        id="start-date"
                        label="Start Date"
                        placeholder="Click to select a date"
                    />                

                    
                    {/* <fieldset class="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input id="street" type="text" />

                        <label for="city">City</label>
                        <input id="city" type="text" />

                        <label for="state">State</label>
                        <select name="state" id="state"></select>

                        <label for="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label for="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select> */}
                </form>
                <Button>Save</Button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}