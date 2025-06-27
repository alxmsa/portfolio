import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImgHotel from '../assets/img/hotel_chambord.webp';
import projImgBoulangerie from '../assets/img/boulangerie_diop.webp';
import projImgKasa from '../assets/img/kasa.webp';
import projImgCoffee from '../assets/img/coffee.webp';
import projImgSlider from '../assets/img/slider.webp';
import projImgPortfolio from '../assets/img/portfolio.webp';
import projImgGrimoire from '../assets/img/mon_vieux_grimoire.webp';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
            {
                title: "Kasa",
                description: "Projet from scratch where I have to develop the entire application, React components, React Router routes, following Figma mockups",
                languages: "REACT JS",
                imgUrl: projImgKasa,
                path: "kasa"
            },
            {
                title: "Portfolio",
                description: "Old portfolio, I did it from scratch using Html, Css and Javascript using youtube to help me",
                imgUrl: projImgPortfolio,
                path: "portfoliovf"
            },
            {
                title: "Coffee Eshop",
                description: "I did this page using Html, Css and Javascript following a Youtube course video",
                imgUrl: projImgCoffee,
                path: "projet_coffeeShop"
            },
            {
                title: "Hôtel Chambord",
                description: "This was one of my first project I have to do during my qualification at Ifocop, I used Html, css and Javascript",
                imgUrl: projImgHotel,
                path: "hotelChambord"

            },
            {
                title: "Projet Slider",
                description: "I did this project following a Youtube course video to learn more about sliders",
                imgUrl: projImgSlider,
                path: "slider"
            },
            {
                title: "Boulangerie Diop",
                description: "I realize this project just after the Chambord project, I reproduced a restaurant website to train myself with flexbox. I adapted it into a bakery website using only Html and css",
                imgUrl: projImgBoulangerie,
                path: "boulangerie"
            },
    ];
    const backProject = [
        {
            title: "Mon vieux grimoire",
            description: "I have to develop an Api to create features like the authentification, the creation of a new book, modification etc... using node js, express and mongo db",
            imgUrl: projImgGrimoire,
            path: "mon_vieux_grimoire",
            backend: true,
        }
    ];

    return (
        <section className="project" id="projects">
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
                                            backProject.map((project,index) => {
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