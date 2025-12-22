import { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/Me4.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    
    // Tiempos fijos para mejor control
    const typingSpeed = 100;  // Velocidad de escritura (ms)
    const deletingSpeed = 50;  // Velocidad de borrado (ms)
    const pauseTime = 2000;    // Pausa antes de borrar (ms)

    const toRotate = [
        "Data and IA Nerd",
        "Agile Collaborator",
        "Problem Solver",
        "Business Analysis Enthusiast",
        "A Good Person !"
    ];

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick();
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(ticker);
    }, [text, isDeleting]);  // Dependencias para evitar repeticiones innecesarias

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Berrocal "}<span className="wrap">{text}</span></h1>
                        <p>I'm a passionate Student from Mexico</p>
                        {/* <p>| Exploring Data Analysis 🚀</p> */}
                        <button onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}>Let's connect <i className='bi bi-arrow-right-circle' size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg.src} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
