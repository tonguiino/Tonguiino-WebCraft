import "./Home.scss"
import profileImage from "../../assets/img/FotoPerfilSantiagoTonguino.jpg"
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


const Home = () => {
    const homeRef = useRef();

    // Efectos usados con gsap 
    useGSAP(() => {
        // Tarjeta entrando por la izquierda
        gsap.from(".profile-img", {
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: homeRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        // Textos y botones entrando por la derecha en cascada (stagger)
        gsap.from(".profile-info > *", {
            x: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: homeRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });
    }, { scope: homeRef });


    return (
        <section className="home" id="home" ref={homeRef}>
            <div className="profile-img">
                <div className="card">
                    <img src={profileImage} alt="Fotografia de perfil Santiago Tonguino" title="Profile img" />
                </div>

            </div>
            <div className="profile-info">
                <h1 className="text-3xl font-bold text-blue-600" >Desarrollador Web</h1>
                <h2>Ey, soy Santiago Tonguino</h2>
                <p>Me dedico al desarrollo web full-stack, creando sitios atractivos, funcionales y escalables. Domino tecnologías frontend (HTML5, CSS, JavaScript, TypeScript, React, Next.js, Sass), backend (PHP, Laravel, WordPress, SQL Server), y DevOps (Docker, Caddy, Nginx) para entregar soluciones completas y optimizadas.</p>
                <div className="prodfile-info-button animado">
                    <button onClick={() => window.open('https://drive.google.com/file/d/1YbLPll2FqawjixDK6CVL53jcUcTSNcJY/view', '_blank')} >Conoce mi CV</button>
                    <button onClick={() => window.open('https://www.linkedin.com/in/tonguiino/', '_blank')} >linkedin</button>
                </div>
            </div>
        </section>




    )
}
export default Home