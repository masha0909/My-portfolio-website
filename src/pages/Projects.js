import React from 'react'
import { ProjectCard } from "./ProjectCard";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import '../styles/Projects.css';

import projImg1 from "../assets/img/project-img1.gif";
import projImg2 from "../assets/img/project-img2.gif";
import projImg3 from "../assets/img/project-img3.gif";
import projImg4 from "../assets/img/project-img4.gif";
import projImg5 from "../assets/img/project-img5.gif";
import projImg6 from "../assets/img/project-img6.gif";
import projImg7 from "../assets/img/project-img7.gif";

import 'animate.css';


const Projects = () => {

    const projects1 = [
        {
            title: "Machine Learning",
            description: "Face Detection",
            imgUrl: projImg2,
            url: "#projects"
        },
        {
            title: "Deep Learning",
            description: "Design & Development",
            imgUrl: projImg1,
            url: "#projects"
        },
        {
            title: "Artificial Intelligence",
            description: "Voice Assistant",
            imgUrl: projImg3,
            url: "#projects"
        },
    ];

    const projects2 = [
        {
            title: "Data Analytics",
            description: "Design & Development",
            imgUrl: projImg4,
            url: "#projects"
        },
        {
            title: "Data Visualization",
            description: "Design & Development",
            imgUrl: projImg5,
            url: "#projects"
        },
    ];

    const projects3 = [
        {
            title: "Python Game",
            description: "Design & Development",
            imgUrl: projImg6,
            url: "#projects"
        },
        {
            title: "Blockchain",
            description: "Stack Blockchain Development",
            imgUrl: projImg7,
            url: "#projects"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            <div className="animate__animated animate__fadeIn">
                                <h2>Projects</h2>
                                <p>Inspiration. Achievement. Result.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">ML AI DL</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Analytics</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Apps</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <Row className="justify-content-center align-items-center">
                                                {
                                                    projects1.map((project, index) => {
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
                                        <Tab.Pane eventKey="second">
                                            <Row className="justify-content-center align-items-center">
                                                {
                                                    projects2.map((project, index) => {
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
                                        <Tab.Pane eventKey="third">
                                            <Row className="justify-content-center align-items-center">
                                                {
                                                    projects3.map((project, index) => {
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
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
