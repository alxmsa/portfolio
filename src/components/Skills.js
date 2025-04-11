import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html_logo.webp";
import css from "../assets/img/css3_logo.webp";
import javascript from "../assets/img/JavaScript_logo.webp";
import apirest from "../assets/img/apiRestLogo.png";
import reactjs from "../assets/img/reactjs_logo.webp";
import nodejs from "../assets/img/nodejs_logo.webp";
import mongodb from "../assets/img/mongodb_logo.webp";
import colorSharp from "../assets/img/color-sharp.webp";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>The skills I have developed reflect my expertise and ability to tackle diverse challenges, combining technical proficiency, creativity, and adaptability to deliver real value to every project. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={html} alt="html"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="javascript"/>
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={apirest} alt="api rest"/>
                                <h5>API REST</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="React JS"/>
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Node JS"/>
                                <h5>NODE JS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="MongoDb"/>
                                <h5>MONGODB</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
      )
}