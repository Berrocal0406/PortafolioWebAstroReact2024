import linux from "../assets/img/linux1.png";
import Jira from "../assets/img/jira.png";
import python from "../assets/img/python3.png";
import excel from "../assets/img/excel.png";
import sql from "../assets/img/sql.png";
import git from "../assets/img/git1.png";
import php from "../assets/img/php1.png";
import mysql from "../assets/img/mysql1.png";
import laravel from "../assets/img/laravel2.png";
import js from "../assets/img/js.png";
import angular from "../assets/img/angular.png";
import sql_server from "../assets/img/servidor-sql.png";
import postman from "../assets/img/postman.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <TrackVisibility once>
        {({ isVisible }) => (
          <div
            className={`container ${
              isVisible ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            <div className="row">
              <div className="col-12">
                <div className="skill-bx">
                  <h2>Skills</h2>
                  <p>
                    These are the technologies and tools I have learned
                    throughout my journey as a Engineer.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={mysql.src} alt="Image" />
                      <h5>MySQL</h5>
                    </div>
                    <div className="item">
                      <img src={sql.src} alt="Image" />
                      <h5>Sql</h5>
                    </div>
                    <div className="item">
                      <img src={git.src} alt="Image" />
                      <h5>Git</h5>
                    </div>
                    <div className="item">
                      <img src={postman.src} alt="Image" />
                      <h5>Postman</h5>
                    </div>
                    <div className="item">
                      <img src={python.src} alt="Image" />
                      <h5>Python</h5>
                    </div>
                    <div className="item">
                      <img src={js.src} alt="Image" />
                      <h5>Js</h5>
                    </div>
                    <div className="item">
                      <img src={linux.src} alt="Image" />
                      <h5>Linux</h5>
                    </div>
                    <div className="item">
                      <img src={sql_server.src} alt="Image" />
                      <h5>SQL Server</h5>
                    </div>
                    <div className="item">
                      <img src={Jira.src} alt="Image" />
                      <h5>Jira</h5>
                    </div>
                    <div className="item">
                      <img src={laravel.src} alt="Image" />
                      <h5>Laravel</h5>
                    </div>
                    <div className="item">
                      <img src={php.src} alt="Image" />
                      <h5>PHP</h5>
                    </div>
                    <div className="item">
                      <img src={excel.src} alt="Image" />
                      <h5>Excel</h5>
                    </div>
                    <div className="item">
                      <img src={angular.src} alt="Image" />
                      <h5>Angular</h5>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
      <img className="background-image-left" src={colorSharp.src} alt="Image" />
    </section>
  );
};
