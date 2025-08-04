import Card from "./card";
import "./projects.scss"
import GoClean from "../../assets/img/GoClean.png"

const Projects = () => {
    return (

        <section className="projects-container">
            <h2>Proyectos Destacados</h2>
            <Card title="Go Clean - Frontend" tech='React, Axios, React Router DOM, Sass' info='Interfaz web responsiva desarrollada en React para la gestión de usuarios y prestadores de servicios de limpieza. Incluye diseño adaptable, navegación fluida entre vistas, manejo eficiente de estados y una experiencia de usuario intuitiva.' img='GoClean' />
        </section>

    )
}

export default Projects;