import Input from "../ui-kit/Input";
import Button from "../ui-kit/Button";
import { HandleDatePicker } from "./DatePicker";
import HandleSelect from "../ui-kit/Select";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addEmployee } from "../../features/counter/employeeSlice";
import {ModalApp} from "fpw-my-modal"

export default function Home() {

  const methods = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.startDate = data.startDate.toLocaleDateString()
    data.dateOfBirth = data.dateOfBirth.toLocaleDateString()
    data.department = data.department.value
    data.state = data.state.value
    console.log("register",data);
    dispatch(addEmployee(data));    
  };

  return (
    <div className="page-home">
      <div>
        <Link className="link" to="/employee-list">View Current Employees</Link>
        {/* <Modal /> */}
        <h2 className="home-create">Create Employee</h2>
        {/* FormProvider is used to access data of input in deep component */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} id="create-employee">
            <Input id="firstName" placeholder="First Name"  />
            <Input id="lastName" placeholder="Last Name" />
            <HandleDatePicker
              id="dateOfBirth"
              label="Date of birth"
              placeholder="Click to select a date"
            />
            <HandleDatePicker
              id="startDate"
              label="Start Date"
              placeholder="Click to select a date"
            />
            <fieldset className="address">
              <legend>Address</legend>
              <Input id="street" placeholder="Street"  />
              <Input id="city" placeholder="City"  />
              <HandleSelect id="state" label="State" />
              <Input id="zipCode" placeholder="Zip Code" type="number" />
            </fieldset>
            <HandleSelect id="department" label="Department" />
            <Button type="submit">Save</Button>
            <ModalApp buttonText="Send" message="Employee created" />
          </form>
        </FormProvider>
      </div>

      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </div>
  );
}
