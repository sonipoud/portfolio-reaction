import React from 'react';
import { Card } from 'react-bootstrap';
import {AiOutlineGithub} from 'react-icons/ai';
import budgetTracker from '../../assets/images/budget-tracker.jpg';
import noSql from '../../assets/images/noSQL.jpg';
import regex from '../../assets/images/regex.jpg';
import beat from '../../assets/images/beat-it.jpg';
import tech from '../../assets/images/my-blog.png';
import commerce from '../../assets/images/ecommerce-backend.jpg';
import note from '../../assets/images/note-taker.png';
import team from '../../assets/images/team-profile-generator.jpg';
import readme from '../../assets/images/readme-generator.jpg';
import brew from '../../assets/images/brewery-dog.jpg';
import weather from '../../assets/images/weather-dashboard.jpg';
import work from '../../assets/images/work-day-scheduler.jpg';
import code from '../../assets/images/code-quiz.jpg';
import password from '../../assets/images/password-generator.jpg';
import run from '../../assets/images/run-buddy.jpg';
import horizeon from '../../assets/images/horiseon.jpg';
import './style.css'

function Portfolio() {
    return (
        <div>
            <h2> My work </h2>
            <div className="row row-cols-1 row-cols-md-2 g-4 flex-row title-color">
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={budgetTracker} alt="budget" />
                    <Card.Body>
                        <Card.Title>PWA Budget-tracker</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">JavaScript/Express/Mongoose/PWA</Card.Subtitle>
                        <Card.Link href="https://budtrack-money.herokuapp.com/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={noSql} alt="noSQL" />
                    <Card.Body>
                        <Card.Title>NoSQL</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">JNoSQL/MongoDB/Express.js/Node</Card.Subtitle>
                        <Card.Link href="https://github.com/sonipoud/NosocialSQL"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={regex} alt="regex" />
                    <Card.Body>
                        <Card.Title>Regex</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Github Gist</Card.Subtitle>
                        <Card.Link href="https://gist.github.com/sonipoud/9895a3c3ba5d2781a0d10d3c735bdc48"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={beat} alt="music" />
                    <Card.Body>
                        <Card.Title>Beat IT</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Sequelize/Node/JS/Express/Handlebars/CSS</Card.Subtitle>
                        <Card.Link href="https://beatit-music-app.herokuapp.com/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={tech} alt="tech-blog" />
                    <Card.Body>
                        <Card.Title>Tech Blog</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Sequelize/Node/JS/Express/Handlebars/CSS</Card.Subtitle>
                        <Card.Link href="https://techbloggermvc.herokuapp.com/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={commerce} alt="e-commerce" />
                    <Card.Body>
                        <Card.Title>E-commerce Back End</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">SQL/sequelize/Node/JS</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/mercey/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={note} alt="note-taker" />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS/JS/Express/Node/API</Card.Subtitle>
                        <Card.Link href="https://note-notetaker.herokuapp.com/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={team} alt="team-gen" />
                    <Card.Body>
                        <Card.Title>Team Profile Generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">JS/Node/OOP/TDD/ES6</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/Antisfy/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={readme} alt="readme-gen" />
                    <Card.Body>
                        <Card.Title>ReadMe Generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">JS</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/genreadmeator/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={brew} alt="brewery-dog" />
                    <Card.Body>
                        <Card.Title>Brewery Dog</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">JS</Card.Subtitle>
                        <Card.Link href="https://jconnro.github.io/brewery-dog/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={weather} alt="weather-dashboard" />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS/JS/API</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/blazerer/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={work} alt="work-schedule" />
                    <Card.Body>
                        <Card.Title>WorkDay Scheduler</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS/JS/</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/leafcal/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={code} alt="code-quiz" />
                    <Card.Body>
                        <Card.Title>Code Quiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS/JS/</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/QAMPLY/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={password} alt="password-gen" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS/JS/</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/crashgen/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={run} alt="run-buddy" />
                    <Card.Body>
                        <Card.Title>Run Buddy</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/run-buddy/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '40rem' }}>
                    <Card.Img src={horizeon} alt="horiseon" />
                    <Card.Body>
                        <Card.Title>Horiseon</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML/CSS</Card.Subtitle>
                        <Card.Link href="https://sonipoud.github.io/mahamandir/"><AiOutlineGithub style={{fontSize:'40px'}}/></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}

export default Portfolio;