import React from 'react'
import { Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.png"
import navIcon3 from "../assets/img/nav-icon3.svg"

import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                </Row>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/maria-vadzeika-7ab1b6247/"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/masha0909"><img className='icon2' src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/masha_kondrateva95/"><img src={navIcon3} alt="" /></a>
                </div>
                <p>Copyright 2022. All Rights Reserved</p>
            </Container>
        </footer>
    )
}

export default Footer
