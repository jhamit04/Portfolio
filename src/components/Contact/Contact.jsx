import React from "react";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "react-loaders";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2eapqkq",
        "template_y8nubg9",
        form.current,
        "kTKk2K3cmLUDgwDtz"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            📩 If you're interested in discussing a project, have a
            collaboration opportunity, or just want to chat about all things
            React, feel free to reach out. I'm always open to new connections
            and adventures in the world of web development!
          </p>

          {/* CONTACT FORM SECTION */}

          <div className="contact_form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat_button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* MAP INFO SECTION */}

        <div className="info_map">
          Amit,
          <br />
          India, Karnataka
          <br />
          #67 Rainbow Residency SarjaPur
          <br />
          Bangalore
          <br />
          <span>jhamit04@gmail.com</span>
        </div>

        {/* MAP SECTION */}

        <div className="map_wrap">
          <MapContainer center={[18.6024, 73.7962]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.6024826, 73.7959899]}>
              <Popup>Amit lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
