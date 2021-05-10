import React, { Component } from 'react';
import Dp from '../Images/Dharmik.png'
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';
import { Image, Nav, Container, Row, Col } from 'react-bootstrap';
import './resume.css'
import { SocialIcon } from 'react-social-icons';


class About extends Component {
    render() {
        return(
            <Aux>
                <Container > 
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
                                    <Nav.Link href="/" id="navbh">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/programming-journey" id="navb">Programming Journey</Nav.Link>
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
                        <Col className="col-4 "  id="pho" >
                            <Image src={Dp}  style={{width: 400, height: 410}}/>
                        </Col>
                        <Col className="col-8 " id="para">
                            <div>
                                Hi, I'm Dharmik.<br></br><br></br>Learning programming, currently based in 📍<a href="https://en.wikipedia.org/wiki/Ahmedabad" id="colo">Ahmedabad</a>. Pursuing Bachlor's degree from <a href="https://www.glsuniversity.ac.in/" id="colo">GLS University</a> and alumni of <a href="https://www.sdaschoolahmedabad.org/" id="colo">SDA</a>.<br></br><br></br>Intrigued by getting things done, writing, strategy, fabulous food, soft music, and even better conversations.<br></br><br></br>Trying to be driven, to imagine the impossible, to work hard for things that are worth it, and to be surrounded by those that bring out the best in me.
                            </div>
                        </Col>
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
                        <Col className="col-4 "/>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default About;