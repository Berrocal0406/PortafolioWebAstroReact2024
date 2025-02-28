import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  // 1. "Despertar" el servidor con un ping al montar el componente
  useEffect(() => {
    fetch("https://portfolio-backend-n1ra.onrender.com/ping")
      .then(() => console.log("Servidor despierto"))
      .catch(() => console.log("Despertando servidor..."));
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // 2. Reintento automático en la petición de envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const url = "https://portfolio-backend-n1ra.onrender.com/contact";
    const maxAttempts = 3;
    let attempts = 0;
    let success = false;
    let result;

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });

        // Si el servidor responde con error en la cabecera HTTP
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        result = await response.json();

        // Verificamos que el backend responda con el `code === 200`
        if (result.code === 200) {
          success = true;
          break; // Salimos del ciclo si todo salió bien
        } else {
          throw new Error("El servidor devolvió un código distinto a 200");
        }
      } catch (error) {
        attempts++;
        console.log(`Intento ${attempts} fallido: ${error.message}`);

        // Esperamos 2 segundos antes de volver a intentar (si no es el último)
        if (attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }

    setButtonText("Send");

    if (success) {
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg.src}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) => onFormUpdate("message", e.target.value)}
                      />
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
