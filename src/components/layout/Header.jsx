import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../assets/wealthHealth.png"

export default function Header() {
    const location = useLocation()

    return (
         <div className="header">
            <div className="header-logo">
                <img src={logo} alt={logo} height="124px" width="134px" />
                <h1 className="header-title">HRnet</h1>
            </div>
            {location.pathname === "/" && 
            <div className="link-table-employee">
                <Link className="link" to="/employee-list">View Current Employees</Link>
            </div>
            }
            {location.pathname === "/employee-list" && 
            <div className="link-table-employee">
                <Link to="/" className="link">Home</Link>
            </div>
            }
        </div>
    )            

}