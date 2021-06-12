import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { Card, Nav, Container, Row, Col } from 'react-bootstrap';
import './resume.css';
import SDA from '../Images/sda.png';
import GLS from '../Images/gls.png';
import { SocialIcon } from 'react-social-icons';


class Academics extends Component {
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
                                    <Nav.Link href="/programming-journey" id="navb">Programming Journey</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/academics" id="navbh">Academics</Nav.Link>
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
                        <Col className="col-10" id="pho">
                            <Card>
                                <Card.Img variant="top" src={GLS} />
                                <Card.Body>
                                <Card.Title id="sda">GLS University</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" id="sub">June 2019 - May 2022</Card.Subtitle>
                                <Card.Text id="gl">
                                <br/>
                                After high school, I opt for Business Administration to be written in my degree certificate. GLS was not the best option at the time but I opted for it just because the Saleshandy office was nearby. 
                                <br/><br/>
                                The opportunities to explore were many in GLS. For example, the elective subjects in each semester are very innovative and outside the box. In the very first semester, it was the management lesson from mythology. Secondly, co-curricular activities like Samvedna(donation), Avesh(intercollege competitions), Crest(event management) trills the inner me.  
                                <br/><br/>
                                <span id="ahmeda">📍Ahmedabad</span><br/> 
                                🔗 <a href="https://www.glsuniversity.ac.in/" id="col">GLS University</a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="pho">
                            <Card>
                                <Card.Img variant="top" src={SDA} />
                                <Card.Body>
                                <Card.Title id="sda">Seventh Day Adventist Higher Secondary School</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" id="sub">June 2004 - April 2019</Card.Subtitle>
                                <Card.Text id="gl">
                                    <br/>
                                    From alphabets to algebra, poems to novels, and numbers to calculus, SDA has taught me everything. From nursery to boards, SDA was constant. As it has ICSE boards, I always feel about being ahead of every kid around. Morning prayers were the most amazing moments we remember when all the friends meet.                                     
                                    <br/><br/>
                                    Due to heavy courses, the co-curricular activities were limited. In my primary standards, I was furious in sports which leads to my cabinet is fulls of trophies as well as medals but after sixth grade, the attention was shifted to studies as in sixth-grade percentage I got was least till that time i.e 78%. Besides sport, I got certificates for good conduct and character, regularity and punctuality, and best boy in class.
                                    <br/><br/>
                                    <span id="ahmeda">📍Ahmedabad</span><br/> 
                                    🔗 <a href="https://www.sdaschoolahmedabad.org/" id="col">SDA</a>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-4  "/>
                        <Col className="col-5 " id="icon">
                            <SocialIcon url="https://twitter.com/dharmiksp"  bgColor="#899b9f" id="cons" style={{ height: 45, width: 45 }}/>
                            <SocialIcon url="https://www.linkedin.com/in/dharmiksp/"  bgColor="#899b9f" id="cons"style={{ height: 45, width: 45 }}/>
                            <SocialIcon url="https://github.com/Dharmiksp"  bgColor="#899b9f" id="cons" style={{ height: 45, width: 45 }}/>
                            <SocialIcon url="https://instagram.com/dharmik_15"  bgColor="#899b9f" id="cons" style={{ height: 45, width: 45 }}/>
                            <SocialIcon url="mailto:pateldharmik1504@gmail.com"  bgColor="#899b9f" id="cons" style={{ height: 45, width: 45 }}/>
                        </Col>
                        <Col className="col-3 "/>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default Academics;
