import React from 'react';
import resume from '../../components/assets/resume.pdf'

const styles ={
    resumeStyle: {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,0.9)',
      },
    }

    export default function Resume() {
        return (
            <div>
            <section className="resume" style={styles.resumeStyle}>
            <h1 className="headings">My Skills</h1>
            <div className="container">
            <div className="smallContainer">
                <br></br>
                <a
                    href={require("../assets/Katelynn_Donahue-McCann_Resume.pdf")}
                    target="_blank"
                >
                    <button className="btn">Download My Resume Here</button>
                </a>
            </div>
            <div className="smallContainer">
                  <li>html
                  <li>CSS
                <br></br>
            </div>
        </div>
    </section>
</div>
);
}