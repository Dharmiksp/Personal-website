import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { Button, CardDeck, Card, Nav, Container, Row, Col } from 'react-bootstrap';
import './resume.css';
import Da from '../Images/logos/1.png';
import Db from '../Images/logos/3.png';
import Dc from '../Images/logos/4.png';
import Dd from '../Images/logos/2.png';
import De from '../Images/logos/5.png';
import Df from '../Images/logos/6.png';
import Dg from '../Images/logos/7.png';
import Dh from '../Images/logos/8.png';
import Di from '../Images/logos/9.png';
import Dj from '../Images/logos/10.png';


class Programming extends Component {
    render() {
        return (
            <Aux>
                <Container>
                    <Row>
                        <Col className="col-3 " />
                        <Col className="col-6 ">
                            <center><div id="title">DHARMIK PATEL</div></center>
                        </Col>
                        <Col className="col-3 " />
                    </Row>
                    <Row>
                        <Col className="col-3 "/>
                        <Col className="col-6 " id="nav">
                            <Nav  defaultActiveKey="/" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/" id="navb">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/programming-journey" id="navbh">Programming Journey</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/academics" id="navb">Academics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/sh-experience" id="navb"> SH Experience</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="col-2"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10">
                           <Card id="pho">
                                <Card.Body id="gl">
                                I even didn't know the definition of programming before a day in mid-June. When my Uncle Dhruv called me on cell outside the blue, it was the day. First, they ask me some questions regarding marketing stuff. Slowly and steadily, the conversation was taking heat. Then the discussion went to my plans inside and outside the college. 
                                <br/><br/>
                                Uncle Dhruv asked me to start learning the perks of programming if I like it or not. First, I doubted my capabilities, but if he has advised me with his, he would think I'm capable of it and can be a good programmer, so I picked the green flag and asked him what the game plan. He said, "We have the world's best teacher who can teach you Programming and he is your Uncle Piyush." 
                                <br/><br/>
                                Uncle Piyush was thrilled with this learning programming decision, so we started with some ground rules and learning sources. 
                                <br/><br/>
                                People on Twitter or LinkedIn think I'm a self-learned developer, but I'm not. Uncle Piyush was always there for my baseless or boring doubts. It wouldn't be possible without him in any scenario. 
                                <br/><br/>
                                Till now, I've made two web apps, i.e., CBros and QLink. CBros is a family phone book. As it was my first project, it took almost a month and a half to make the last commit on GitHub. And QLink is a tool alternate to Linktree. It provides one link where user can set their multiple links.  
                                <br/><br/>
                                My learning flow was immensely flawless, all credit to Uncle Piyush. So I would link to share it with you guys below. It is in sequence. Yes, I didn't start with HTML. LOL!
                                <br/><br/>
                                Below image is capture when I was exhausted and want to capture it for memories.
                                </Card.Body>
                                <Card.Img variant="top" src={Dj} />
                            </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="time">
                            <CardDeck>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Da} />
                                    <Card.Body >
                                    <Card.Title id="sap">By Mosh Hamedani</Card.Title>
                                    <Card.Text id="gm">
                                    Initially, it wasn't effortless to understand the JS without any teacher sitting next to you. But after watching each session multiple times, it was clear.
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.udemy.com/course/javascript-basics-for-beginners/">Udemy Course</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Db} />
                                    <Card.Body>
                                    <Card.Title id="sap">By Mosh Hamedani</Card.Title>
                                    <Card.Text id="gm">
                                    If the JS is well understood, OOPs will be way too easy. Four pillars are the only thing to understand here. It's like support to your JS codes.                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.youtube.com/watch?v=PFmuCDHHpwk">YouTube Video</Button>
                                    </Card.Footer>                                    
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Dc} />
                                    <Card.Body>
                                    <Card.Title id="sap">By Academind</Card.Title>
                                    <Card.Text>
                                    The concept of Data Structures is to store the data in which forms. Once the pros and cons concerning them are understood, it is simple.                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.youtube.com/watch?v=41GSinwoMYA">YouTube Video</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="time">
                            <CardDeck>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Dd} />
                                    <Card.Body >
                                    <Card.Title id="sap">By Mosh Hamedani</Card.Title>
                                    <Card.Text >
                                    I feel MySQL is better than any other database as I prefer tables over raw data. Itis very simple  could take two to three hour for beginner works
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.youtube.com/watch?v=7S_tz1z_5bA">YouTube Video</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={De} />
                                    <Card.Body>
                                    <Card.Title id="sap">By Mosh Hamedani</Card.Title>
                                    <Card.Text>
                                    MongoDB would be difficult for you to understand as it is complicated. But when the server's data are raw, it is the best option.
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.udemy.com/course/nodejs-master-class/">Udemy Course</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Df} />
                                    <Card.Body>
                                    <Card.Title id="sap">By Mosh Hamedani</Card.Title>
                                    <Card.Text>
                                    NodeJs becomes simple when the framework or library used is Express or NestJs. It works flawlessly with any frontend stack I've ever used.
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.udemy.com/course/nodejs-master-class/">Udemy Course</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="time">
                            <CardDeck>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Dg} />
                                    <Card.Body >
                                    <Card.Title id="sap">By GeekyShows</Card.Title>
                                    <Card.Text >
                                    Understanding HTML was straightforward for me as I've learned more advanced languages before. You cannot remember all the tags at a time.                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.youtube.com/watch?v=5sxtZ10Vf3s&list=PLbGui_ZYuhihSr4HroBBQt_quHL42JLif">YouTube Playlist</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Dh} />
                                    <Card.Body>
                                    <Card.Title id="sap">By GeekyShows</Card.Title>
                                    <Card.Text>
                                    Till now, I skip the CSS as it is way too tricky for a guy like me who is not in design work nearby. It is like trial and error, making patience work, todo.                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.youtube.com/watch?v=SjXZqUzqZxg&list=PLbGui_ZYuhiisW-k9eEON2vxGABv-PafB">YouTube Playlist</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <Card bg="light" text="dark">
                                    <Card.Img variant="top" src={Di} />
                                    <Card.Body>
                                    <Card.Title id="sap">By Academind</Card.Title>
                                    <Card.Text>
                                    In Frontend, I was confused between Angular and React. As React is a library, it is easy to learn than Angular. Also, the crowd following react is massive.
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button variant="secondary" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy Course</Button>
                                    </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                </Container>
            </Aux>
        )
    }
 }

 export default Programming;
