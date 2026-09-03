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
import capgeminiLogo from "../assets/img/capgemini.png";
import CloudDataVuelos from "../assets/img/cloud_data_pipeline_vuelos.png"
import DBAStarterKit from "../assets/img/postgresql-dba-starter-kit.png"
import QASmokeSuite from "../assets/img/qa-playwright-smoke.png"
import "animate.css";

export const Project = () => {
  const projects = [
    {
      title: "QA Smoke Suite — Playwright (E2E)",
      description: "QA smoke E2E suite with Playwright (TypeScript) + HTML report",
      imgUrl: QASmokeSuite.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/qa-playwright-smoke"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
    {
      title: "PostgreSQL DBA Starter Kit (Docker)",
      description: "Mini practical project to demonstrate DBA basics.",
      imgUrl: DBAStarterKit.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/postgresql-dba-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
    {
      title: "Cloud Data Pipeline – Análisis Vuelos",
      description: "Cloud Data pipeline executed locally, following the Medallion pattern (Raw → Silver → Gold) to analyze flight data.",
      imgUrl: CloudDataVuelos.src,
      seeMore: (
        <a
          href="https://github.com/Berrocal0406/cloud-data-pipeline-vuelos"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Learn More <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
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
                            <img src={capgeminiLogo.src} alt="Capgemini Logo" />
                          </div>
                          <div className="exp-tittle">
                            <h4>Quality Assurance Engineer</h4>
                            <h5>Capgemini ABL <br></br> - Insurance Sector | Jun 2026 - Present</h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <li>
                                Created test strategies and test case matrices, and tracked metrics through Azure DevOps, including test evidence, deployment documentation, and certification follow-up, working as a QE within an agile environment under the SAFe methodology.
                              </li>
                              <li>
                                Executed low-level API testing with Bruno, checking database consistency to prevent incidents.
                              </li>
                              <li>
                                Provided data support for the whole team using Spark SQL in Azure Synapse, and extracted/enrolled data through API calls in Bruno.
                              </li>
                              <li>
                                Built custom AI agents with GitHub Copilot (using models like Claude 4.6 Sonnet) to speed up repetitive tasks, such as creating matrices, reports, and ambiguity analysis, while keeping human and business judgment in the process.
                              </li>
                              <li>
                                Worked in bilingual team cells under the SAFe methodology, with 3-week iterations, promoting shift-left testing from the start and coordinating with Devs, POs, Scrum Masters, and external teams.
                              </li>
                              <li>
                                Ran and monitored regression test automation pipelines, coordinating with the Automation team on scenario coverage and results analysis.
                              </li>
                              <li>
                                Gave quality sign-off (QA approval) within the team, coordinating with external teams, InfoSec, and Infrastructure on release requirements for each team iteration.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="exp-item">
                          <div className="exp-image">
                            <img src={capgeminiLogo.src} alt="Capgemini Logo" />
                          </div>
                          <div className="exp-tittle">
                            <h4>Junior Software Tester</h4>
                            <h5>Capgemini Engineering <br></br> - Banking Sector | Mar 2026 - Jun 2026</h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <li>
                                Executed manual E2E test cycles for web and mobile applications (Android, iOS, Huawei) in a high-volume banking environment, validating critical functional flows across multiple release stages using ALM and Devin AI.
                              </li>
                              <li>
                                Applied ISTQB (Foundation Level) practices and the STLC methodology within cross-functional work cells, as part of the TCoE (Test Center of Excellence), working with development, business, and operations teams under tight deadlines in a regulated industry.
                              </li>
                              <li>
                                Received introductory technical training in test automation, including an internal framework, Python, Cucumber, Gherkin, AI, and basic Selenium concepts.
                              </li>
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="exp-item">
                          <div className="exp-image">
                            <img src={MonedaAyuntamientoPachuca.src} alt="MonedaAyuntamientoPachuca Logo" />
                          </div>
                          <div className="exp-tittle">
                            <h4>Digital Consultant | School Process</h4>
                            <h5>Municipal Government of <br></br> Pachuca de Soto | Oct 2025 - Feb 2026</h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <br />
                              <li>
                                Supported and trained administrative staff in the use of institutional systems and databases.
                              </li>
                              <li>
                                Helped extract, validate, and process data for reports and analysis.
                              </li>
                              <li>
                                Built light automations to optimize administrative tasks related to information handling.
                              </li>
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
                              <br />
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
                            <h4>Frontend Developer & QA Intern</h4>
                            <h5>WiseCode | Jan 2025 - Aug 2025</h5>
                          </div>
                          <div className="exp-content">
                            <ul style={{ marginTop: "1rem" }}>
                              <li>
                                Developed and maintained frontend modules in Angular (JavaScript), adding UI improvements and third-party library integrations in a production web application.
                              </li>
                              <li>
                                Fixed UI bugs and built API integrations between frontend views and backend services, contributing to the functional quality and visual consistency of the product.
                              </li>
                              <li>
                                Supported QA activities: module testing, functional requirements validation, and bug documentation, gaining early exposure to structured testing practices.
                              </li>
                              <li>
                                Reviewed requirements directly with the client.
                              </li>
                              <li>
                                Worked with developers, QA teams, and Product Owners under the Scrum methodology using Jira in a startup environment.
                              </li>
                              <li>
                                Took part in QA environment deployments, backups, and environment validation.
                              </li>
                              <li>
                                Received a recommendation letter from the company at the end of the internship.
                              </li>
                              <br />
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
