import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodMunch from "../../Assets/Projects/leaf.png";
import wikipedia from "../../Assets/Projects/codeEditor.png";
import crypto from "../../Assets/Projects/chatify.png";
import mcp from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodMunch}
              isBlog={false}
              title="Food Munch"
              description="Developed a fully responsive website offering a comprehensive list of food items with details. Enhanced UX with structured HTML elements and Bootstrap components. Implemented product videos for a better customer experience."
              ghLink="https://github.com/mohanbaragi009/Food-munch"
              demoLink="https://mohanbaragi009.github.io/Food-munch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikipedia}
              isBlog={false}
              title="Wikipedia Search Application"
              description="Built a custom search app to fetch curated results from Wikipedia. Displayed responsive results using HTML lists styled with CSS and Bootstrap. Integrated asynchronous fetch GET HTTP API calls for seamless navigation."
              ghLink="https://github.com/mohanbaragi009"
              demoLink="https://mohanwikipedia.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptocurrency Tracker"
              description="Created a platform to track live crypto market prices. Displayed data in responsive tables using React and Bootstrap. Integrated REST API for real-time cryptocurrency data."
              ghLink="https://github.com/mohanbaragi009"
              demoLink="https://mohancrypto.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcp}
              isBlog={false}
              title="Learning Path Generator with MCP"
              description="Built a Streamlit-based app generating personalized learning paths using Model Context Protocol (MCP). Integrated YouTube, Google Drive, and Notion for comprehensive learning experiences. Built using Python and Pipedream."
              ghLink="https://github.com/mohanbaragi009"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
