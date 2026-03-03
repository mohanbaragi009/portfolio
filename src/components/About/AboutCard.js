import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Mohan Baragi</span>{" "}
            from <span className="purple">Bengaluru, Karnataka, India</span>.
            <br />
            I'm currently a{" "}
            <span className="purple">Teaching Assistant</span> at{" "}
            <span className="purple">NxtWave Technologies</span>.
            <br />I am pursuing a{" "}
            <span className="purple">
              B.E in Computer Science Engineering and Data Science
            </span>{" "}
            from{" "}
            <span className="purple">AMC Engineering College</span>{" "}
            (CGPA: 8.16).
            <br />
            <br />
            Outside of coding, some activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Coding Problems 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & New Technologies 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
