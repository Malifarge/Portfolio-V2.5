import Logo from "../images/logo.png"

const Loader = () =>{
    return(
        <div className="Loader-Container flex">
            <img src={Logo} alt="Loader" className="Loader" />
        </div>
    )
}

export default Loader