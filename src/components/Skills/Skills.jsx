import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            I am a React Developer who is well versed in technologies like
            <p></p>
            <span class="tech_tag"> HTML5</span>,
            <span class="tech_tag"> CSS3</span>,
            <span class="tech_tag"> React</span>,
            <span class="tech_tag"> Redux</span>,
            <span class="tech_tag"> Javascript</span>,
            <span class="tech_tag"> Styled Component</span>,
            <span class="tech_tag"> Git</span>,
          </p>
          <p>
          While I may not be a professional designer, I possess a keen eye for aesthetics 
          and have hands-on experience in crafting responsive web designs. I take great care in 
          optimizing my code to ensure an exceptional user experience. 
          Moreover, I am committed to offering ongoing support even after the project has concluded.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amit-kumar-jha-7629a5128/"
            >
              {" "}
              LinkedIn{" "}
            </a>
            and
            <a target="_blank" href="https://github.com/jhamit04">
              {" "}
              Github{" "}
            </a>
            profile for more details.
          </p>
        </div>

        <div className="logos_container">
          <div className="logos">
            <p>
              <FontAwesomeIcon icon={faReact} color="#0f5663" />
            </p>
            <p>
              <FontAwesomeIcon icon={faBootstrap} color="#8565ec" />
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
            </p>
            <p>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} color="#050505" />
            </p>
            <p>
              <FontAwesomeIcon icon={faSass} color="#fff" />
            </p>
            <p>
              <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
