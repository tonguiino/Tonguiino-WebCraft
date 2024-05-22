import "./AboutUs.scss"
import profileImage from "../../assets/img/FotoPerfilSantiagoTonguino.jpg"

const Button = ({ text }) => {
    return (
        <button>{text}</button>
    )
}

const AboutUs = () => {
    return (
        <section id="AboutMe">
            <div className="profile-info">
                <h1>Desarrollador Web</h1>
                <h2>Ey, soy Santiago Tonguino</h2>
                <p>Me dedico al desarrollo web, enfocándome en construir sitios web atractivos y totalmente funcionales.
                    Mi dominio abarca las tecnologías esenciales como HTML5, CSS, JavaScript, React, Sass, WordlPress,
                    PHP y SQL server.</p>
                {/* <div className="prodfile-info-button"> */}
                <Button text={'Descargar cv'} />
                <Button text={<a href="https://www.linkedin.com/in/santiago-tonguino-quiceno-41a44b167/" target="_blank" >LinkedIn</a>} />
                {/* </div> */}
            </div>
            <div className="profile-img">
                <img src={profileImage} alt="" />
            </div>
        </section>


    )
}
export default AboutUs