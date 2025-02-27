import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, seeMore }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* Usamos un botón enfocable */}
      <button
        className="proj-imgbx"
        tabIndex="0"
        type="button" // Evita comportamientos extra si está dentro de <form>
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          {seeMore}
        </div>
      </button>
    </Col>
  );
};
