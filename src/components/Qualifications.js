import { Container, Col, Row } from "react-bootstrap";

export const Qualifications = () => {
   return (
    <section className="qualification">
        <Container>
            <Row>
                <Col>
                    <div className="qualification-bx">
                        <h2>Qualifications</h2>
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div className="qualification__end">
                                    <h3 className="qualification__title">Développeur Web</h3>
                                    <span className="qualification__subtitle">Openclassrooms</span>
                                    <div className="qualification__calendar">
                                        Mai 2024 - Avril 2025
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Développeur Intégrateur Web</h3>
                                    <span className="qualification__subtitle">Paris - Centre IFOCOP</span>
                                    <div className="qualification__calendar">
                                        Novembre 2022 - Février 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div className="qualification__end">
                                    <h3 className="qualification__title">BTS Assistant de Gestion PME/PMI</h3>
                                    <span className="qualification__subtitle">Paris - CFA IGS</span>
                                    <div className="qualification__calendar">
                                    2017 - 2019
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Baccalauréat STMG</h3>
                                    <span className="qualification__subtitle">Paris - Saint-Nicolas</span>
                                    <div className="qualification__calendar">
                                        2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
   )
}