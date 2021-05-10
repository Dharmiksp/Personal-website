import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';
import { Card, Nav, Container, Row, Col } from 'react-bootstrap';
import './resume.css';
import Dl from '../Images/1.png';
import Dm from '../Images/2.png';
import Dn from '../Images/3.png';
import Do from '../Images/4.png';
import Dq from '../Images/5.png';
import { SocialIcon } from 'react-social-icons';


class Experience extends Component {
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
                                    <Nav.Link href="/academics" id="navb">Academics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/sh-experience" id="navbh"> SH Experience</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="col-2"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="phot">
                        <Card>
                            <Card.Body>
                            <Card.Title id="sda">First visit to Saleshandy HQ</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" id="sub">April 2017</Card.Subtitle>
                            <Card.Text id="gl">
                                After my 10th boards, I enjoyed my vacations, or we can say wasting precious time. One fine evening there was a family function celebrating the birth of my cousin. My dad and uncle Dhruv were sitting next to each other, and luckily I was standing nearby, and then Dhruv Chachu asked me about how I spend time on vacations, and the answer I gave was not satisfactory for either of them. Dad asked me to join Dhruv chachu in the office on the remaining days of vacation. That was the turning point. The next day, I started commuting with Uncle on the bike. It was fun commuting with them, or I can say more than just fun. 
                                <br /><br/>
                                Initially, I was supposed to learn from the uncles' courses on the to-do list. The first course I learned was "Getting Things Done," a fundamental concept every person should know to grow. The course changes my mindset of looking at tons of work to do with ease and at a proactive time also at godspeed.
                                <br /><br/>
                                After completing and implying decent courses, I started helping Utsav Bhai in recruiting process. My responsibility was to send the message in LinkedIn to the potential candidate for the respective position. When the hard work pays off, the level of joy is difficult to measures. I feel the same when one candidate in the final stage of the hiring has written my name in recommend column for the job.
                                <br /><br/>
                                After three fine months, I've to say goodbye to SalesHandy HQ as my schools would start soon.
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={Dl} />
                        </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="phot">
                        <Card>
                            <Card.Body>
                            <Card.Title id="sda">Returning after two years break</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" id="sub">March 2019</Card.Subtitle>
                            <Card.Text id="gl">
                            Being in the corporate world for just three months makes me feels I'm ahead of those poor kids in the 11th and 12th grades. Just kidding! As I've learned the GTD concept earlier, it becomes easy to manage studies without attending external tuitions. I scored 75% on boards, which was pretty decent for me. Vacation suck! This leads me to have two options restart the SalesHandy or family business. I choose SalesHandy.
                            <br/><br/>
                            This time the faces were new, and so do the roles and challenges. As I left being a kind of recruiter, I started with the same. This time Utsav Bhai was replaced by another employee. For almost three to four months, I was doing the same, which makes it monotonous for guys like me as I want challenges every day to be awake. To compete, I change the sword, i.e., marketing. 
                            <br/><br/>
                            The first task I got was to update the datasheet every Monday, and the source of data was Google Analytics, Mixpanel, and developer tools of a web store. Days passed, and the learning continues. I learned a pretty decent amount of Marketing tactics and terms in a short period. However, it was theoretical, and I want to imply it, so I started discussing ideas and beliefs with quite passionate and young peers. After discussing, they point out where I should improve or change the model. 
                            <br/><br/>
                            Also, we were enjoying those days with some delicious and tasty snacks which were so-called free. The catch here is we were writing reviews on platforms, and they, in change, rewards us with 10s of dollars. 
                            <br/><br/>
                            On twenty-thirds of March, the lockdown was imposed, so the WFH started, which was quite dull and unproductive. But it changed the way I see back nowadays. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={Do} />
                        </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="phot">
                        <Card>
                            <Card.Body>
                            <Card.Title id="sda">Learnings on Wheels</Card.Title>
                            <Card.Text id="gl">
                                My uncles believe the problems are the component you faces while doing something. Don't try to avoid problematic situations. An ordinary mentor will teach his pupil how to solve the problem, but in my case, they teach me the standard process to solve any problem which hits me at any point in my life. I enjoyed learning concepts that can make life simple as well as stable. Believe it or not, uncles taught all these concepts while commuting. I loved spending time with them as I learned every single second with them.
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={Dn} />
                        </Card>
                        </Col>
                        <Col className="col-1"/>
                    </Row>
                    <Row>
                        <Col className="col-1"/>
                        <Col className="col-10" id="phot">
                        <Card>
                            <Card.Body>
                                <Card.Title id="sdp"><center>"GETTING A MENTOR IS THE SHORTCUT TO SUCCESS!"</center></Card.Title>
                            </Card.Body>
                            <Card.Img variant="bottom" src={Dm} />
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

export default Experience;