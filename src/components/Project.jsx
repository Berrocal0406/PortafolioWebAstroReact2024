import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.jsx";
import mindpeace1 from "../assets/img/mindpeace1.png";
import upp_app from "../assets/img/upp_app.png";
import portfolioAstro from "../assets/img/portfolioAstro.png";
import wiseCode from "../assets/img/wiseCode.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pokedexDashboard from "../assets/img/pokedex_Dashboard.png";
import SqlNotesImage from "../assets/img/SqlNotes.png";
import MonedaAyuntamientoPachuca from "../assets/img/MonedaAyuntamientoPachuca.png";
import "animate.css";

export const Project = () => {
  const projects = [
    {
      title: "SQL Notes — From Basics to Advanced",
      description: "This repository accompanies my personal SQL notes, where I document the language from the fundamentals to advanced concepts.",
      imgUrl: SqlNotesImage.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/sql-notes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
    {
      title: "Pokedex Tableau Dashboard",
      description: "Interactive dashboard developed in Tableau Public.",
      imgUrl: pokedexDashboard.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/Pokedex_Dashboard_Tableau"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
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
                            <img src={MonedaAyuntamientoPachuca.src} alt="WiseCode Logo" />
                          </div>
                          <div className="exp-tittle">
                            <h4>Digital Consultant | Scholar Internship</h4>
                            <h5>Municipal Government of <br></br> Pachuca de Soto | October 2025 - Present </h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <br>
                              </br>
                              <li>
                                Data analysis: extraction, cleaning, and use of logic to build dashboards using INEGI data
                              </li>
                              <li>
                                Development of small systems to speed up administrative tasks.
                              </li>
                              <li>
                                Training staff in the use of current technology tools.
                              </li>
                              <li>
                                Implementation of automations for data extraction and processing.
                              </li>
                              <li>
                                Account management support.
                              </li>
                              <br>
                              </br>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="exp-item">
                          <div className="exp-image">
                            <img src={wiseCode.src} alt="WiseCode Logo" />
                          </div>
                          <div className="exp-tittle">
                            <h4>FrontEnd Developer Intern</h4>
                            <h5>WiseCode | January 2025 - August 2025</h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <li>
                                Fixed bugs and made improvements to the system.
                              </li>
                              <li>
                                Worked with cross-functional teams to reach common goals.
                              </li>
                              <li>
                                Used Scrum methodology to follow agile development.
                              </li>
                              <li>
                                Created CRUD interfaces using BackEnd endpoints.
                              </li>
                              <li>
                                Made visual changes to improve the UI and UX.
                              </li>
                              <li>
                                Extensive use of the Angular framework.
                              </li>
                              <li>
                                Deployed the FrontEnd environment many times for the QA team.
                              </li>
                              <li>
                                Joined team meetings to understand new projects, follow new changes, and share improvements.
                              </li>
                              <li>
                                Used AWS CodeCommit to update functions.
                              </li>
                            </ul>
                          </div>
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
