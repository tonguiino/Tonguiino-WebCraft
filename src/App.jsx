import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contac from "./Components/Contac/Contac";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Projects from "./Components/Projects/projects";


function App() {

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Verifica si ya cargó, por si el efecto entra tarde
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Limpieza del evento
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <Skills />
            <Projects />
            <AboutMe />
            <Contac />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}


export default App;
