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
                <h2><span class="material-symbols-outlined">person_play</span> Habilidades</h2>
                <p>A continuación, podrán ver las tecnologías y herramientas que manejo actualmente y en las que estoy en constante aprendizaje y evolución. Mi pasión por el desarrollo me impulsa a aprender y perfeccionar continuamente mis habilidades, asegurando que pueda ofrecer lo mejor en cada proyecto que emprendo.</p>
            </div>
            <div className="skills-box">
                <div className="skills-box-square">
                    <div className="skills-box-square-tittle">
                        <h2>Tecnologías</h2>
                    </div>
                    <div className="skills-box-square-info">
                        <img src={htmlImg} alt="Logo html" title="Logo html"/>
                        <img src={cssImg} alt="Logo Css" title="Logo Css"/>
                        <img src={jsImg} alt="Logo Javascript" title="Logo Javascript"/>
                        <img src={reactImg} alt="Logo React" title="Logo React"/>
                        <img src={sassImg} alt="Logo Sass" title="Logo Sass"/>
                        <img src={wordPressImg} alt="Logo WordPreds" title="Logo WordPreds" />
                    </div>
                </div>
                <div className="skills-box-square">
                    <div className="skills-box-square-tittle">
                        <h2>Herramientas</h2>
                    </div>
                    <div className="skills-box-square-info">
                        <img src={visualCodeImg} alt="Logo Visual Studio" title="Logo Visual Studio" />
                        <img src={gitHubImg} alt="Logo Github" title="Logo Github" />
                        <img src={gitImg} alt="Logo git" title="Logo git" />
                        <img src={npmImg} alt="Logo npm" title="Logo npm" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Skills