import React from "react";
import resume from "../../components/assets/resume.pdf";

const styles = {
  resumeStyle: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "20px",
    backgroundColor: "rgba(208,184,172,1)",
  },
};

export default function Resume() {
  return (
    <div>
      <section className="resume" style={styles.resumeStyle}>
        <h1 className="headings">My Skills</h1>
        <div className="container">
          <div className="smallContainer">
            <br></br>
            <a href={require("../assets/resume.pdf")}
              target="_blank">

              <button className="btn">Click for Resume</button>
            </a>
          </div>
          <div className="smallContainer">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
}
