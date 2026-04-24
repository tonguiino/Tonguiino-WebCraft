import { useRef, useState } from "react";
import "./Skills.scss";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const Skills = () => {
    const skillRef = useRef();
    useRevealOnScroll(skillRef);

    const skillsData = [
        { name: "HTML5", icon: "devicon-html5-plain", category: "frontend" },
        { name: "JavaScript", icon: "devicon-javascript-plain", category: "frontend" },
        { name: "LARAVEL", icon: "devicon-laravel-original colored", category: "backend" },
        { name: "React", icon: "devicon-react-original", category: "frontend" },
        { name: "DOCKER", icon: "devicon-docker-plain colored", category: "herramienta" },
        { name: "Next.js", icon: "devicon-nextjs-original-wordmark", category: "frontend" },
        { name: "CSS3", icon: "devicon-css3-plain", category: "frontend" },
        { name: "TYPESCRIPT", icon: "devicon-typescript-plain colored", category: "frontend" },
        { name: "PHP", icon: "devicon-php-plain colored", category: "backend" },
        { name: "TAILWIND", icon: "devicon-tailwindcss-original colored", category: "frontend" },
        { name: "Sass", icon: "devicon-sass-original", category: "frontend" },
        { name: "MATERIAL MUI", icon: "devicon-materialui-plain colored", category: "frontend" },
        { name: "WordPress", icon: "devicon-wordpress-plain", category: "frontend" },
        { name: "NODE.JS", icon: "devicon-nodejs-plain colored", category: "backend" },
        { name: "MYSQL", icon: "devicon-mysql-original", category: "backend" },
        { name: "NGINX", icon: "devicon-nginx-original", category: "herramienta" },
        { name: "UBUNTU", icon: "devicon-ubuntu-plain colored", category: "herramienta" },
        { name: "VS Code", icon: "devicon-vscode-plain", category: "herramienta" },
        { name: "GitHub", icon: "devicon-github-original", category: "herramienta" },
        { name: "Git", icon: "devicon-git-plain", category: "herramienta" },
        { name: "NPM", icon: "devicon-npm-original-wordmark", category: "herramienta" },
        { name: "PNPM", icon: "devicon-pnpm-plain-wordmark colored", category: "herramienta" },
        { name: "POSTGRESQL", icon: "devicon-postgresql-plain colored", category: "backend" },
        { name: "LARAVEL", icon: "devicon-laravel-original colored", category: "backend" },

    ];

    const [filter, setFilter] = useState("todos");

    const filteredSkills = filter === "todos"
        ? skillsData
        : skillsData.filter(s => s.category === filter);

    return (
        <section className="skills" id="skills" ref={skillRef}>
            <div className="skills-info">
                <h2><span className="material-symbols-outlined">person_play</span> Habilidades</h2>
                <p>Explora las tecnologías y herramientas que utilizo para construir soluciones digitales sólidas y modernas.</p>
            </div>

            <div className="skills-filters">
                <button
                    onClick={() => setFilter("todos")}
                    className={filter === "todos" ? "active" : ""}
                >Todos</button>
                <button
                    onClick={() => setFilter("frontend")}
                    className={filter === "frontend" ? "active" : ""}
                >Frontend</button>
                <button
                    onClick={() => setFilter("backend")}
                    className={filter === "backend" ? "active" : ""}
                >Backend & Databases</button>
                <button
                    onClick={() => setFilter("herramienta")}
                    className={filter === "herramienta" ? "active" : ""}
                >DevOps & tools</button>
            </div>

            <div className="skills-grid">
                {filteredSkills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="icon-box">
                            <i className={`${skill.icon} colored`}></i>
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;