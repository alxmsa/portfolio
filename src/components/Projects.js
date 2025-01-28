import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/hotel_chambord.png';
import projImg3 from '../assets/img/boulangerie_diop.jpg';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg1
            },
            {
                title: "HOTEL CHAMBORD",
                description: "HTML / CSS / JS",
                imgUrl: projImg2
            },
            {
                title: "Business Startup",
                description: "HTML / CSS",
                imgUrl: projImg3
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg1
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg2
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg3
            },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible })  => 
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Each project I have undertaken reflects my ability to transform concepts into concrete achievements, while meeting specific needs and delivering measurable results.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">FRONTEND</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">BACKEND</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >OTHERS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first' >
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                <ProjectCard
                                                 key={index}
                                                {...project}
                                                />
                                            )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                <ProjectCard
                                                 key={index}
                                                {...project}
                                                />
                                            )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                <ProjectCard
                                                 key={index}
                                                {...project}
                                                />
                                            )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    )
}