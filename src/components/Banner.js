import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Frontend Developer", "Backend Developer", "Freelancer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100 );
    const period = 2000;
    const handleOpenCV = () => {
        window.open('/moussa_diop_cv.pdf', '_blank');
      };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
/*             setIndex(prevIndex => prevIndex - 1); */
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
/*             setIndex(1); */
            setDelta(500);
          } else {
/*             setIndex(prevIndex => prevIndex + 1); */
          }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible })  => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1> {`Hello I'm Moussa `}<span className="wrap">{text}</span></h1>
                                    <p>Junior in development and good quality producer.</p>
                                    <button onClick={handleOpenCV}>Download Resume<ArrowRightCircle size={25}/></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}