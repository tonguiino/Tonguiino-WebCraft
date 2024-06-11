import "./Skills.scss"
import htmlImg from "../../assets/img/html5_logo.png"
import cssImg from "../../assets/img/CSS3_logo.png"
import jsImg from "../../assets/img/Js_logo.png"
import reactImg from "../../assets/img/React_logo.png"
import sassImg from "../../assets/img/Sass_logo.png"
import wordPressImg from "../../assets/img/wordPress_logo.png"
import gitImg from "../../assets/img/Git_logo.png"
import gitHubImg from "../../assets/img/GitHubLogo.svg"
import visualCodeImg from "../../assets/img/Vscode_logo.png"
import npmImg from "../../assets/img/npm_logo.png"

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-info">
                <h2>Habilidades</h2>
                <p>
                A continuación, podrán ver las tecnologías y herramientas que manejo actualmente y en las que estoy en constante aprendizaje y evolución. Mi pasión por el desarrollo me impulsa a aprender y perfeccionar continuamente mis habilidades, asegurando que pueda ofrecer lo mejor en cada proyecto que emprendo.</p>
            </div>
            <div className="skills-box">
                <div className="skills-box-square">
                    <div className="skills-box-square-tittle">
                        <h2>Tecnologías</h2>
                    </div>
                    <div className="skills-box-square-info">
                        <img src={htmlImg} alt="" />
                        <img src={cssImg} alt="" />
                        <img src={jsImg} alt="" />
                        <img src={reactImg} alt="" />
                        <img src={sassImg} alt="" />
                        <img src={wordPressImg} alt="" />
                    </div>
                </div>
                <div className="skills-box-square">
                    <div className="skills-box-square-tittle">
                        <h2>Herramientas</h2>
                    </div>
                    <div className="skills-box-square-info">
                        <img src={visualCodeImg} alt="" />
                        <img src={gitHubImg} alt="" />
                        <img src={gitImg} alt="" />
                        <img src={npmImg} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Skills