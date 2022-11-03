import { Link } from "react-router-dom";

export default function Error() {
    return (<>
        <p>This page doesn't exist</p>
        <Link to="/home">Back to home</Link>
    </>
    )
}