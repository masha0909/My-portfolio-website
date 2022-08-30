import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import '../styles/Skills.css';

import 'react-multi-carousel/lib/styles.css';


// its default code for carousel
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
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
    //

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Working with Data in Clean, Modern and Valuable way.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">Advanced</div>
                                        </div>
                                    </div>
                                    <h5>Data Analytics <br />
                                        & Visualization
                                    </h5>
                                </div>

                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">Intermediate</div>
                                        </div>
                                    </div>
                                    <h5>Machine Learning</h5>
                                </div>

                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">Advanced</div>
                                        </div>
                                    </div>
                                    <h5>Python & Libraries</h5>
                                </div>

                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">Intermediate</div>
                                        </div>
                                    </div>
                                    <h5>Artificial Intelligence</h5>
                                </div>

                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask full">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div className="inside-circle">Intermediate</div>
                                        </div>
                                    </div>
                                    <h5>Deep Learning</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills
