import Card from "./card";
import "./projects.scss"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Projects = () => {

    const projects = useRef();

    useGSAP(() => {
        gsap.from(projects.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.Out',
            scrollTrigger: {
                trigger: projects.current,
                start: 'top 80%',
                scrub: 1,
                toggleActions: 'play none none none'
            }
        })
    })

    return (

        <section className="projects-container" ref={projects}>
            <h2>Proyectos Destacados</h2>
            <Card title="Go Clean - Frontend" tech='React, Axios, React Router DOM, Sass' info='Interfaz web responsiva desarrollada en React para la gestión de usuarios y prestadores de servicios de limpieza. Incluye diseño adaptable, navegación fluida entre vistas, manejo eficiente de estados y una experiencia de usuario intuitiva.' link='https://github.com/tonguiino/GoClean' />
            <Card title="Go Clean - Backend (Microservicios)" tech='PHP, Laravel, Mysql, Postman, API REST, MVC' info='Interfaz web responsiva desarrollada en React para la gestión de usuarios y prestadores de servicios de limpieza. Incluye diseño adaptable, navegación fluida entre vistas, manejo eficiente de estados y una experiencia de usuario intuitiva.' link='https://github.com/tonguiino/GoClean' />

        </section>



    )
}

export default Projects;