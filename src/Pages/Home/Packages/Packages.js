import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <div id="packages" className="py-5">
            <div className="py-5">
                <h4 id="">Our Packages</h4>
                <h1 className="fw-bold">We're
                    <span className="text-info"> Offering</span>
                </h1>
            </div>

            <Container className="package-bg">
                <Row xs={1} md={2} lg={3}>
                    {
                        packages.map(pack => <Package
                            key={pack._id}
                            pack={pack}
                        ></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;