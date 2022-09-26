import { Link } from "react-router-dom"

import logo from "../images/miniLogo.png"

const Nav = () =>{
    return(
        <nav className="flex center g-20">
            <Link to={"/"}><img src={logo} alt="Home" /></Link>
            <Link to={"/About"}><span>A</span>bout</Link>
            <Link to={"/Contacts"}><span>C</span>ontacts</Link>
            <Link to={"/Projets"}><span>P</span>rojets</Link>
        </nav>
    )
}

export default Nav