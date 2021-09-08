import React from 'react';
import { Card } from 'react-bootstrap';
import profile from '../../assets/images/profile-pic.jpg';
import './style.css';


function About() {
    return (
        <Card>
            <Card.Img variant="left" src={profile} className="d-flex justify-content-center alter" alt="picture-of-me" />
            <Card.Body>
                <h2 className="me-color"> About Me </h2>
                <p className="body-color">
                    Welcome to my E-Portfolio! <br />
                    My name is Sonika Poudyal and I graduated from Rutgers University with a degree of Bachelors in
                    Biology
                    Sciences.
                    Eventhough, I graduated with a biology major, I never felt accomplished.
                    After graduation, I worked in a lab for few years but I never enjoyed it.
                    I was always searching for something better and I realized that I wanted to go for a different
                    career
                    path.
                    After struggling for a few years to find my right career path, I finally found one as a Web
                    developer.
                </p>
            </Card.Body>
        </Card>
    )
}

export default About;