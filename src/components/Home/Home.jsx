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
             <span className={letterClass}>👋 Hi </span>
            <span className={`${letterClass} _12`}>there! </span>
            <br />
            <span className={`${letterClass} _13`}>I'm </span>
            <span className={`${letterClass} _14`}>a </span>
            <span className={`${letterClass} _15`}>passionate </span>
            <span className={`${letterClass} _16`}>React </span>
            <span className={`${letterClass} _17`}>developer </span>
            <span className={`${letterClass} _18`}>with </span>
            <span className={`${letterClass} _19`}>1.5 </span>
            <span className={`${letterClass} _20`}>years </span>
            <span className={`${letterClass} _21`}>of </span>
            <span className={`${letterClass} _22`}>hands-on </span>
            <span className={`${letterClass} _23`}>experience </span>
            <span className={`${letterClass} _24`}>in </span>
            <span className={`${letterClass} _25`}>building </span>
            <span className={`${letterClass} _26`}>modern </span>
            <span className={`${letterClass} _14`}>web </span>
            <span className={`${letterClass} _14`}>applications </span> 
            
            

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
