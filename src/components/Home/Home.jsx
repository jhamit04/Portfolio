import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import LogoTitle from "../../assets/images/chirag.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// import Logo from "./Logo/Logo";
import LogoN from "../../assets/images/developer.png";
import "./Home.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text_animate");
  const nameArray = [" ","A","m", "i", "t", ","];
  const jobArray = [
    "c",
    "o",
    "d",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home_page">
        <div className="text_zone"> 
          <h1>
            <span className={letterClass}>👋 Hi</span>
            <span className={`${letterClass} _12`}>there!</span>
            <br />
            <span className={`${letterClass} _13`}>I'm</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _14`}>passionate</span>
            <span className={`${letterClass} _14`}>React</span>
            <span className={`${letterClass} _14`}>developer</span>
            <span className={`${letterClass} _14`}>with</span>
            <span className={`${letterClass} _14`}>1.5</span>
            <span className={`${letterClass} _14`}>years</span>
            <span className={`${letterClass} _14`}>of</span>
            <span className={`${letterClass} _14`}>hands-on </span>
            <span className={`${letterClass} _14`}>experience</span>
            <span className={`${letterClass} _14`}>in</span>
            <span className={`${letterClass} _14`}>building</span>
            <span className={`${letterClass} _14`}>modern</span>
            <span className={`${letterClass} _14`}>web</span>
            <span className={`${letterClass} _14`}>applications</span>
            
            

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Technophile</h2>
          <Link to="/contact" className="flat_button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="logo_container">
        <img className="solid_logo" src={LogoN} alt="Amit" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
