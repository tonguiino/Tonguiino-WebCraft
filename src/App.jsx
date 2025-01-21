import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contac from "./Components/Contac/Contac";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

function App() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);


    return () => clearTimeout(timer);
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
