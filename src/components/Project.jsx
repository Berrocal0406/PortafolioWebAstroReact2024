import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.jsx";
import mindpeace1 from "../assets/img/mindpeace1.png";
import upp_app from "../assets/img/upp_app.png";
import portfolioAstro from "../assets/img/portfolioAstro.png";
import wiseCode from "../assets/img/wiseCode.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Project = () => {
  const projects = [
    {
      title: "MindPeace",
      description: "A platform designed to detect and manage anxiety.",
      imgUrl: mindpeace1.src,
      seeMore: (
        <a
          href="https://github.com/DavidEsc23/MindPeace"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
    {
      title: "Portfolio Web (Astro)",
      description: "A personal web portfolio created with Astro and React.",
      imgUrl: portfolioAstro.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/PortafolioWebAstroReact2024"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
    {
      title: "Laravel Database (Upp_App)",
      description:
        "A small project demonstrating a normalized database using Laravel.",
      imgUrl: upp_app.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/upp_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <br />
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Work Experience</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="slideInUp">
                {/* TAB 1: Projects */}
                <Tab.Pane eventKey="first">
                  <div className="experiencia-laboral">
                    <h3>My Projects</h3>
                    <p>
                      Below is a brief overview of the projects I've worked on
                      throughout my journey as a Software Engineer. <br />
                      <br />
                      <strong>Click to learn more</strong> about each one!
                    </p>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </div>
                </Tab.Pane>

                {/* TAB 2: Work Experience */}
                <Tab.Pane eventKey="second">
                  <div className="experiencia-laboral">
                    <h3>Work Experience</h3>
                    <p>
                      Below you’ll find an overview of my roles,
                      accomplishments, responsibilities, and the technologies
                      I’ve used in different organizations.
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <div className="exp-item">
                          <div className="exp-image">
                            <img src={wiseCode.src} alt="WiseCode Logo" />
                          </div>
                          <h4>Backend Developer Intern</h4>
                          <h5>WiseCode | January 2025 - Present</h5>
                          <ul style={{ marginTop: "1rem" }}>
                            <li>Bug fixing and system improvements.</li>
                            <li>
                              Collaborative work with cross-functional teams.
                            </li>
                            <li>
                              Adoption of Scrum methodology for agile
                              development.
                            </li>
                            <li>
                              Development of CRUD operations, endpoints, and
                              simple functionalities.
                            </li>
                            <li>Extensive use of the Laravel framework.</li>
                            <li>
                              Implementation of Swagger for API documentation.
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2.src} />
    </section>
  );
};
