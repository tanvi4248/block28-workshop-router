import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/black">Black</Link>
        </div>
    )
}