import { useForm } from "react-hook-form"
import Input from "../ui-kit/Input"
import Button from "../ui-kit/Button"
import { HandleDatePicker } from "./DatePicker"
import HandleSelect from "../ui-kit/Select"
import { Link } from "react-router-dom"

export default function Home() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <div className="page-employee">
            <div>
                <Link to="/employee-list">View Current Employees</Link>
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
                    <fieldset className="address">
                        <legend>Address</legend>
                        <Input 
                            id="street"
                            placeholder="Street"
                        />
                        <Input 
                            id="city"
                            placeholder="City"
                        /> 
                        <HandleSelect 
                            id="state"
                            label="State"
                        />   
                        <Input 
                            id="zip-code"
                            placeholder="Zip Code"
                            type="number"
                        /> 
                    </fieldset> 
                    <HandleSelect 
                            id="department"
                            label="Department"
                    />
                </form>
                <Button>Save</Button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}