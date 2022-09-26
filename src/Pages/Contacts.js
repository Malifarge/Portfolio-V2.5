import { useNavigate } from "react-router-dom"

import home from "../images/home.png"
import phone from "../images/phone.png"
import mail from "../images/mail.png"
import github from "../images/github.png"
import Linkedin from "../images/Linkedin.png"

import H2 from "../Components/H2"
import Button from "../Components/Button"

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
            <H2>Contacts</H2>
            <address className="flex clmn g-50">
                <div className="flex jcsb clmntel">
        
                    <div className="flex center g-20">
                        <img src={home} alt="home"/>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/95+Rue+Jean+Jaur%C3%A8s,+77270+Villeparisis/@48.9386518,2.6030413,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6172f2a3b30ef:0x207d96bc136875d8!8m2!3d48.9386483!4d2.60523"> 95 rue jean jaurès , 77270 Villeparisis.Chez Mr.Baron</a>
                    </div>

                    <div className="flex center g-20">
                        <img src={phone} alt="phone"/>
                        <a href="tel:+33766631511">07.66.63.15.11</a>
                    </div>

                </div>

                <div className="asc flex center g-20">
                        <img src={mail} alt="mail"/>
                        <a href="mailto:malifarge.thomas9@gmail.com">malifarge.thomas9@gmail.com</a>
                </div>

                <div className="flex jcsb clmntel">

                    <div className="flex center g-20">
                        <img src={github} alt="github"/>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Malifarge">Mon github</a>
                    </div>
        
                    <div className="flex center g-20">
        
                        <img src={Linkedin} alt="Linkedin"/>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-malifarge-477868241/"> Mon compte Linkedin</a>
                    </div>

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