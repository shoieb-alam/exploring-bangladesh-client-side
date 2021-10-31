import { faHandsHelping, faUserCheck, faUserClock, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Success.css'

const Success = () => {
    return (
        <div className="pt-5 success-bg">
            <div className="py-5">
                <h2>Why You Will Choose
                    <div className="py-3">
                        <span className="brand bg-warning px-2 rounded-3"> X-PLORING</span>
                        <span className="bg-info px-2 rounded-3">BANGLADESH </span>
                    </div>
                </h2>
            </div>
            <div className="pb-5">
                <Container>
                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <Card className="success-card p-3">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faUserFriends} size='4x' />
                                    <Card.Title> 100+ Country Wide Guide</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="success-card p-3">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faHandsHelping} size='4x' />
                                    <Card.Title> 100% Trusted Travel Agency</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="success-card p-3">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faUserClock} size='4x' />
                                    <Card.Title> 5+ Year of Travel Experience</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="success-card p-3">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faUserCheck} size='4x' />
                                    <Card.Title> 80% of Our Happy User </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Success;