import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./About.scss";
import Loader from "react-loaders";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p align="JUSTIFY">
            👋 Hi there! I'm Amit, a passionate React developer with 1.5 years
            of hands-on experience in building modern web applications. I thrive
            on turning ideas into interactive and user-friendly digital
            experiences.
          </p>
          <p align="JUSTIFY">
            🚀 My journey into the world of web development began with a
            fascination for creating dynamic and responsive websites. Over the
            past year and a half, I've had the privilege of working on a variety
            of projects that have honed my skills and deepened my love for
            React.
          </p>
          <p align="JUSTIFY">
            💡 My expertise lies in crafting elegant and efficient user
            interfaces using React. I'm well-versed in JavaScript, HTML, and
            CSS, and I have experience with state management libraries like
            Redux and data-fetching with RESTful APIs. I'm committed to writing
            clean and maintainable code that scales.
          </p>
          <p align="JUSTIFY">
            🌟 What truly drives me is the ability to solve real-world problems
            through technology. I'm passionate about creating seamless,
            performance-driven web applications that provide exceptional user
            experiences. I love staying up-to-date with the latest trends and
            best practices in web development to deliver high-quality results.
          </p>
          <p align="JUSTIFY">
            🚀 As I continue to grow in my career, I'm excited about taking on
            new challenges and collaborating with innovative teams to build even
            more exciting projects. I'm always eager to learn and adapt to
            emerging technologies in this ever-evolving field.
          </p>
          
          <div className="flat_button">
            <a target="_blank" href="/Amit Resume.pdf">
              RESUME
            </a>
          </div>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#0075FF" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#1def4a" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCode} color="#181818" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
