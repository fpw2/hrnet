import { useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()
    console.log(location)

    return (
         <div className="header">
            {location.pathname === "/" && <h1 className="header-title">HRnet</h1>}
            {location.pathname === "/employee-list" && <h1 className="header-title">Current Employees</h1>}
        </div>
    )            

}