import { useNavigate } from "react-router-dom"

import H1 from "../Components/H1"
import H2 from "../Components/H2"
import Button from "../Components/Button"

const Home = () =>{

    const navigate = useNavigate() 

    const handleAboutclick = () => {
        navigate("/About")
    }

    const handleProjetsclick = () => {
        navigate("/Projets")
    }

    return(
        <>
            <H1>Thom<span>a</span>s M<span>a</span>lif<span>a</span>rge</H1>
            <H2>Développeur Fullstack Junior</H2>
            <p>Actuellement à la recherche d'un contrat d'apprentissage de 12 mois avec un rythme d'une semaine en formation et 3 en entreprise</p>
            <div className="flex jcsa">
                <Button text="About" handleClick={handleAboutclick}/>
                <Button text="Projets" handleClick={handleProjetsclick}/>
            </div>
        </>
    )
}

export default Home