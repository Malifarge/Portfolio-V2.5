import { useNavigate } from "react-router-dom"

import H2 from "../Components/H2"
import Button from "../Components/Button"

const About = () =>{

    const navigate = useNavigate() 

    const handleHomeclick = () => {
        navigate("/")
    }

    const handleProjetsclick = () => {
        navigate("/Projets")
    }

    return(
        <>
            <H2>About</H2>
            <p> Étant autonome , j’ai tout de même beaucoup de plaisir à travailler en groupe notamment  pour l’entre-aide possible qui permet d’avancer les projets plus efficacement. </p>
            <p> Créatif , j’écris depuis tout jeune que ce soit  des histoires ou de la poésie et je m’intéresse à beaucoup de forme d’art pour m’inspiré moi même dans mes projets. Les crations sur internet m’ont beaucoup inspiré dans mes objectifs, particulièrement les créations vidéo et streaming me menant à moi même travailler sur l’ordinateur.</p>
            <p> C’est par ses passions que j’en suis venus à m’interesser aux métiers du numérique et à faire une formation Artis de Simplon . Ainsi j’y ais découvert le code  dont le côté créatif m’a tout de suite passioné. Ainsi j’ai décider de continuer dans cette voie avec la formation développement web et web mobile de Konexio  afin de faire de cette passion, mon métier.</p>
            <p> Mon objectif est de pouvoir toujours me surpasser grâce aux évolutions du code ainsi qu’à un apprentissage constant de nouvelle possibilité afin de devenir un bon développeur full-stack . Enfin  mon côté créatif me pousse aussi à m’interreser au design afin d’être plus complet et d’avoir une satisfaction encore plus grande de mon travail.</p>
            
            <div className="flex jcsa">
                <Button text="Home" handleClick={handleHomeclick}/>
                <Button text="Projets" handleClick={handleProjetsclick}/>
            </div>
        </>
    )
}
export default About