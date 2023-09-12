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
             <span className={letterClass}>Hi</span>
            <span className={`${letterClass} _12`} style={{margin:10}}>there! </span>
            <br />
            <span className={letterClass} style={{marginRight:10}}>I'm </span>
            <span className={letterClass} style={{marginRight:10}}>Amit</span>
            <span className={letterClass} style={{marginRight:10}}>a</span>
            <span className={letterClass} style={{marginRight:10}}>passionate</span>
            <span className={letterClass} style={{marginRight:10}}>React</span>
            <span className={letterClass} style={{marginRight:10}}>developer</span>
            <span className={letterClass} style={{marginRight:10}}>with</span>
            <span className={letterClass} style={{marginRight:10}}>1.5</span>
            <span className={letterClass} style={{marginRight:10}}>years</span>
            <span className={letterClass} style={{marginRight:10}}>of</span>
            <span className={letterClass} style={{marginRight:10}}>hands-on</span>
            <span className={letterClass} style={{marginRight:10}}>experience</span>
            <span className={letterClass} style={{marginRight:10}}>in</span>
            <span className={letterClass} style={{marginRight:10}}>building</span>
            <span className={letterClass} style={{marginRight:10}}>modern</span>
            <span className={letterClass} style={{marginRight:10}}>web</span>
            <span className={letterClass} style={{marginRight:10}}>applications.</span> 
            
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
