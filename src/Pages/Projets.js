import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import H2 from "../Components/H2";
import Button from "../Components/Button";
import Loader from "../Components/Loader";
import AnimText from "../Components/AnimText";

const Projets = () =>{

    const [projets,setProjets] = useState([])

    useEffect(()=>{
        fetchProjets()
    },[])

    const fetchProjets = async() =>{
        const response = await fetch("https://portfolio-malifarge-v3.herokuapp.com/projects")
        const data = await response.json()
        setProjets(data)
    }

    const navigate = useNavigate() 

    const handleAboutclick = () => {
        navigate("/About")
    }

    const handleContactsclick = () => {
        navigate("/Contacts")
    }

    return(
        <>
            <H2><AnimText text="Projets"/></H2>
            <section className="flex scroll g-20">
                {projets.length>0 ? projets.map((projet)=>{
                    return (
                        <a href={projet.link} target="_blank" rel="noopener noreferrer" className="nodecoration second" key={projet.title} >
                            <article className="Card" style={{
                                "background" : `url(${projet.url}) no-repeat top/contain`
                            }}>
                                <div className="textProjet flex clmn jcsa">
                                    <H2>{projet.title}</H2>
                                    <p>{projet.description}</p>
                                    <small> techs utilisé: {projet.tecks}</small>
                                </div>
                            
                                
                            </article>
                        </a>
                    )
                }) : <Loader/>}
            </section>
            <div className="flex jcsa">
                <Button text="About" handleClick={handleAboutclick}/>
                <Button text="Contacts" handleClick={handleContactsclick}/>
            </div>
        </>
    )
}

export default Projets