import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Card, Button, Spinner } from 'react-bootstrap';
import './Package.css';

const Package = ({ pack }) => {
    const { isLoading } = useAuth();

    // const {service} = props;
    const { _id, name, price, duration, img1 } = pack;

    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <div className="p-3">
            <Card className="card h-100">
                <Card.Img variant="top" src={img1} className="h-100" />
                <Card.Body>
                    <Card.Title className="text-start">{name}</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between py-3">
                            <h5 className="text-secondary">
                                {duration}
                            </h5>
                            <h5 className="text-danger">BDT: {price}</h5>
                        </div>
                        <Link to={`/booking/${_id}`}>
                            <Button variant="outline-dark" className="px-5 bg-info rounded-pill">Book Now</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};


export default Package;