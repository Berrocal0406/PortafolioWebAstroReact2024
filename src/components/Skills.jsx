import linux from "../assets/img/linux1.png";
import python from "../assets/img/python3.png";
import git from "../assets/img/git1.png";
import docker from "../assets/img/docker1.png";
import php from "../assets/img/php1.png";
import mysql from "../assets/img/mysql1.png";
import laravel from "../assets/img/laravel2.png";
import react from "../assets/img/react1.png";
import github from "../assets/img/github1.png";
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
                    throughout my journey as a developer.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={linux.src} alt="Image" />
                      <h5>Linux</h5>
                    </div>
                    <div className="item">
                      <img src={python.src} alt="Image" />
                      <h5>Python</h5>
                    </div>
                    <div className="item">
                      <img src={git.src} alt="Image" />
                      <h5>Git</h5>
                    </div>
                    <div className="item">
                      <img src={php.src} alt="Image" />
                      <h5>PHP</h5>
                    </div>
                    <div className="item">
                      <img src={github.src} alt="Image" />
                      <h5>GitHub</h5>
                    </div>
                    <div className="item">
                      <img src={mysql.src} alt="Image" />
                      <h5>MySQL</h5>
                    </div>
                    <div className="item">
                      <img src={docker.src} alt="Image" />
                      <h5>Docker</h5>
                    </div>
                    <div className="item">
                      <img src={laravel.src} alt="Image" />
                      <h5>Laravel</h5>
                    </div>
                    <div className="item">
                      <img src={react.src} alt="Image" />
                      <h5>React</h5>
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
