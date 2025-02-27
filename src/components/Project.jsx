import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.jsx";
import mindpeace1 from "../assets/img/mindpeace1.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// Omito algunos imports repetidos por brevedad
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Project = () => {
  const projects = [
    {
      title: "MindPeace",
      description: "Design & Development",
      imgUrl: mindpeace1.src,
      seeMore: (
        <a
          href="https://github.com/DavidEsc23/MindPeace"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "underline" }}
        >
          See More! <i className="bi bi-arrow-right-circle" size={25} />
        </a>
      ),
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* Aplicamos la prop once para que la animación se dispare solo una vez */}
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
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
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* También podemos colocar TrackVisibility once en la parte que hace la animación slideInUp */}
                    <TrackVisibility once>
                      {({ isVisible: isVisibleTab }) => (
                        <Tab.Content
                          id="slideInUp"
                          className={
                            isVisibleTab
                              ? "animate__animated animate__slideInUp"
                              : ""
                          }
                        >
                          {/* TAB 1 */}
                          <Tab.Pane eventKey="first">
                            <div className="experiencia-laboral">
                              <h3>Projects</h3>
                              <p>
                                Aquí describo brevemente mis roles y logros en
                                cada empresa, además de las tecnologías y
                                responsabilidades que tuve a mi cargo.
                              </p>
                              <Row>
                                {projects.map((project, index) => {
                                  return (
                                    <ProjectCard key={index} {...project} />
                                  );
                                })}
                              </Row>
                            </div>
                          </Tab.Pane>

                          {/* TAB 2: Experiencia Laboral */}
                          <Tab.Pane eventKey="second">
                            <div className="experiencia-laboral">
                              <h3>Experiencia Laboral</h3>
                              <p>
                                Aquí describo brevemente mis roles y logros en
                                cada empresa, además de las tecnologías y
                                responsabilidades que tuve a mi cargo.
                              </p>
                              <Row className="justify-content-center">
                                <Col md={6}>
                                  <div className="exp-item">
                                    <div className="exp-image">
                                      <img
                                        src={projImg3.src}
                                        alt="Imagen"
                                      />
                                    </div>
                                    <h4>Desarrollador Frontend</h4>
                                    <h5>Empresa XYZ | 2021 - Presente</h5>
                                    <p>
                                      - Creación de interfaces responsivas con
                                      React y Bootstrap <br />
                                      - Mantenimiento y optimización de
                                      rendimiento <br />
                                      - Colaboración con equipos de diseño y
                                      backend
                                    </p>
                                  </div>

                                  <div className="exp-item">
                                    <h4>Desarrollador Full Stack</h4>
                                    <h5>Startup ABC | 2019 - 2021</h5>
                                    <p>
                                      - Desarrollo y consumo de APIs REST <br />
                                      - Implementación de bases de datos MySQL{" "}
                                      <br />
                                      - Despliegue de aplicaciones en entornos de
                                      producción
                                    </p>
                                  </div>

                                  <div className="exp-item">
                                    <h4>Intern de Desarrollo</h4>
                                    <h5>Compañía Demo | 2018 - 2019</h5>
                                    <p>
                                      - Soporte en migraciones de proyectos <br />
                                      - Documentación y testing <br />
                                      - Aprendizaje de buenas prácticas en equipo
                                      ágil
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      )}
                    </TrackVisibility>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2.src} />
    </section>
  );
};
