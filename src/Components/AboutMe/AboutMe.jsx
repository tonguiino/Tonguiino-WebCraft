import "./AboutMe.scss"
import AboutUSImg from "../../assets/img/Santiago_picture.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";


const AboutMe = () => {

    const aboutMeRef = useRef();

    useGSAP(() => {
        gsap.from(aboutMeRef.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.in",
            scrollTrigger: {
                trigger: aboutMeRef.current,
                start: 'top 80%',
                scrub: true,
                toggleActions: "play none none none"
            }
        })
    })
    return (

        <section className="AboutMe" id="AboutMe" ref={aboutMeRef} >
            <div className="card">
                <img src={AboutUSImg} alt="" />
            </div>

            <div className="aboutMe-info">
                <h2><span className="material-symbols-outlined">person_pin</span> Sobre mí</h2>
                <p>Soy Santiago Tonguino, un Desarrollador Web especializado en la creación de sitios web atractivos y funcionales. Con un sólido dominio de las tecnologías clave en el desarrollo web, incluyendo HTML5, CSS, JavaScript, React y Sass. Además, cuento con conocimientos en WorldPress, PHP, SQL Server.

                </p>
                <p>  Mi experiencia abarca la implementación de prácticas de SEO y la aplicación de HTML semántico para mejorar la accesibilidad y la visibilidad de los sitios web en los motores de búsqueda, junto a todos mis conocimientos esto me permite desarrollar aplicaciones web dinámicas y gestionar bases de datos de manera eficiente.

                </p>
                <p>
                    Mi pasión por la tecnología y el diseño me impulsa a mantenerme actualizado con las últimas tendencias y herramientas en el campo del desarrollo web. Soy un colaborador entusiasta y comprometido, siempre dispuesto a enfrentar nuevos desafíos y aprender de ellos.
                </p>
            </div>

        </section>
    )
}
export default AboutMe