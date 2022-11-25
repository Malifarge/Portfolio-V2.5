import { Link } from "react-router-dom"

import logo from "../images/miniLogo.png"

const Nav = () =>{
    return(
        <nav className="flex center g-20">
            <Link to={"/"}><img src={logo} alt="Home" /></Link>
            <Link to={"/About"}><span className="red">A</span>bout</Link>
            <Link to={"/Contacts"}><span className="red">C</span>ontacts</Link>
            <Link to={"/Projets"}><span className="red">P</span>rojets</Link>
        </nav>
    )
}

export default Nav