import React from "react";
import Headshot from "../assets/Headshot.js";
import "../assets/styles/Headshot.css";

export default function About() {
  return (
    <div className="container">
      <div></div>
      <div className="section">
        <div className="row">
          <div className="col s12 center about-me"></div>
          <br></br>
          <div className="pic">
            {/* <img src={Headshot} alt="profile picture" /> */}
            <div className="intro"></div>
            <h3>About Me</h3>
            <p>
              I am a Web Developer with a background in graphic design, retail
              management and spent a formative year as a longterm substitute
              science teacher in a Catholic high school. I love science,
              reading, spending time with my family and friends,
              <i>The Real Housewives of Beverly Hills</i> and{" "}
              <i>Harry Potter</i>. I am a plant mom and hedgehog mom to my
              angel, Ginger. I love music, anything from Led Zeppelin to A Tribe
              Called Quest and my favorite tv shows include:
              <i> New Girl, </i>
              <i>Scrubs, </i>
              and <i> Keeping Up with the Kardashians.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
