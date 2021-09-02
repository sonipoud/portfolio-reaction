import React from 'react';
import { Card } from 'react-bootstrap';
import coverImage from '../../assets/images/cover.jpg';
import './style.css';

function About() {
    return (
        <Card>
            <Card.Body>
                <h2> About Me </h2>
                <img src={coverImage} alt="cover"/> <br/>
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
            </Card.Body>
        </Card>
    )
}

export default About;