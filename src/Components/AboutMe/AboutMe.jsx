import "./AboutMe.scss"
import AboutUSImg from "../../assets/img/Santiago_Tonguino.webp"


const AboutMe = () => {
    return (

        <section id="AboutMe">
            <div className="aboutMe-info">
                <h2>Sobre mí</h2>
                <p>Soy Santiago Tonguino, un Desarrollador Web especializado en la creación de sitios web atractivos y funcionales. Con un sólido dominio de las tecnologías clave en el desarrollo web, incluyendo HTML5, CSS, JavaScript, React y Sass. Además, cuento con conocimientos en WorldPress, PHP, SQL Server.

                </p>
                <p>  Mi experiencia abarca la implementación de prácticas de SEO y la aplicación de HTML semántico para mejorar la accesibilidad y la visibilidad de los sitios web en los motores de búsqueda, junto a todos mis conocimientos esto me permite desarrollar aplicaciones web dinámicas y gestionar bases de datos de manera eficiente.

                </p>
                <p>
                    Mi pasión por la tecnología y el diseño me impulsa a mantenerme actualizado con las últimas tendencias y herramientas en el campo del desarrollo web. Soy un colaborador entusiasta y comprometido, siempre dispuesto a enfrentar nuevos desafíos y aprender de ellos.
                </p>
            </div>
            <div>
                <img src={AboutUSImg} alt="" />
            </div>
        </section>
    )
}
export default AboutMe