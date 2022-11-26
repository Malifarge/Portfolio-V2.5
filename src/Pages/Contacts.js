import { useNavigate } from "react-router-dom"

import phone from "../images/phone.png"
import mail from "../images/mail.png"
import github from "../images/github.png"
import Linkedin from "../images/Linkedin.png"

import H2 from "../Components/H2"
import Button from "../Components/Button"
import AnimText from "../Components/AnimText"

const Contacts = () =>{

    const navigate = useNavigate() 

    const handleAboutclick = () => {
        navigate("/About")
    }

    const handleProjetsclick = () => {
        navigate("/Projets")
    }

    return(
        <>
            <H2><AnimText text="Contacts"/></H2>
            <address className="flex clmn center g-50">

                <div className="flex center g-20 w-300 second">
                    <img src={phone} alt="phone"/>
                    <a href="tel:+33766631511">07.66.63.15.11</a>
                </div>

                <div className="flex center g-20 w-300 second" >
                    <img src={mail} alt="mail"/>
                    <a href="mailto:malifarge.thomas9@gmail.com">malifarge.thomas9@gmail.com</a>
                </div>

                <div className="flex center g-20 w-300 second">
                    <img src={github} alt="github"/>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Malifarge">Mon github</a>
                </div>
        
                <div className="flex center g-20 w-300 second">
    
                    <img src={Linkedin} alt="Linkedin"/>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-malifarge-477868241/"> Mon compte Linkedin</a>
                </div>

            </address>

            <div className="flex jcsa">
                <Button text="About" handleClick={handleAboutclick}/>
                <Button text="Projets" handleClick={handleProjetsclick}/>
            </div>
            
        </>
    )
}
export default Contacts