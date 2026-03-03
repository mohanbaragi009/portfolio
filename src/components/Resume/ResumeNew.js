import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const RESUME_DRIVE_LINK =
  "https://drive.google.com/file/d/18IyoycDNoG_NLUBLJSd08v1hRz-GQ5JL/view?usp=drivesdk";

const RESUME_EMBED_LINK =
  "https://drive.google.com/file/d/18IyoycDNoG_NLUBLJSd08v1hRz-GQ5JL/preview";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          <iframe
            src={RESUME_EMBED_LINK}
            title="Mohan Baragi Resume"
            width={width > 786 ? "900px" : "100%"}
            height={width > 786 ? "1130px" : "500px"}
            allow="autoplay"
            style={{
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 0 30px rgba(200, 137, 230, 0.3)",
            }}
          />
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
