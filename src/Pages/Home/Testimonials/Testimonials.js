import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <div id="testimonial" className="bg-light">
            <h1 className="pt-5">
                What <span className="text-info">Travellers </span> Says
            </h1>
            <div className="py-5">
                <Container>
                    <Row xs={1} md={2} lg={3}>
                        <Col>
                            <Card className="testimonial-card m-1 h-100 d-flex flex-column">
                                <Card.Img
                                    variant="top"
                                    className="w-50 mx-auto mt-4"
                                    src="https://i.ibb.co/VTD7WWn/iconfinder-8-avatar-2754583-120515.png"
                                />
                                <Card.Body className="d-flex flex-column flex-grow-1">
                                    <Card.Title>Talha Rahman</Card.Title>
                                    <Card.Text className="flex-grow-1">
                                        <FontAwesomeIcon className="mx-2 text-secondary" icon={faQuoteLeft} size="2x" />
                                        We had fantastic service in Cox's Bazar. I strongly recommend that everyone use
                                        this website.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="testimonial-card m-1 h-100 d-flex flex-column">
                                <Card.Img
                                    variant="top"
                                    className="w-50 mx-auto mt-4"
                                    src="https://i.ibb.co/09Yh7GC/image.png"
                                />
                                <Card.Body className="d-flex flex-column flex-grow-1">
                                    <Card.Title>Shakil Ahmed</Card.Title>
                                    <Card.Text className="flex-grow-1">
                                        <FontAwesomeIcon className="mx-2 text-secondary" icon={faQuoteLeft} size="2x" />
                                        In Kuakata, we had excellent service. I strongly advise anyone to utilize this
                                        website.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="testimonial-card m-1 h-100 d-flex flex-column">
                                <Card.Img
                                    variant="top"
                                    className="w-50 mx-auto mt-4"
                                    src="https://i.ibb.co/G7FJNqt/image.png"
                                />
                                <Card.Body className="d-flex flex-column flex-grow-1">
                                    <Card.Title>Yousuf Samiul</Card.Title>
                                    <Card.Text className="flex-grow-1">
                                        <FontAwesomeIcon className="mx-2 text-secondary" icon={faQuoteLeft} size="2x" />
                                        We had outstanding service in Bandarban. This is a website that I strongly
                                        recommend to anybody.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Testimonials;
