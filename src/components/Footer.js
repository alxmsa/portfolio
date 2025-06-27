import { Container, Col, Row } from "react-bootstrap";
import logo from '../assets/img/md_logo_name.webp';
import logo2 from '../assets/img/md_logo_circle.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    <div className="logo_supp logo_footer">
                        <img src={logo2} alt="Logo" className="logo_rotate"/>
                        <img src={logo} alt="Logo" className="logo_static"/>
                    </div>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moussa-diop-7b2099167/"><img src={navIcon1} alt="linkedin"/></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/alxmsa"><img src={navIcon2} alt="facebook" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mssa.dp/"><img src={navIcon3} alt="instagram" /></a>
                        </div>
                        <p>CopyRight 2025. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}