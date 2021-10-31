import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './PackageManaging.css';

const PackageManaging = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`https://frightening-broomstick-18685.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const handleDelete = id => {
        axios.delete(`https://frightening-broomstick-18685.herokuapp.com/services/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('Are you sure to delete this Package?');
                    console.log(res.data.deletedCount);
                    console.log(res.data);
                    const remaining = packages.filter(pack => pack._id !== id);
                    setPackages(remaining);
                }
            })
    }



    return (
        <div className="manage-packages">
            <h2 className="py-5">Manage Packages</h2>
            {
                packages.map(pack => <div key={pack._id}>
                    <Row className="m-2 bg-secondary rounded-pill w-75 mx-auto p-3 text-white">
                        <Col>
                            <h4 className="text-start"> {pack.name} </h4>
                        </Col>
                        <Col>
                            <Button variant="outline-info" className="btn-dark" onClick={() => { handleDelete(pack._id) }}>Delete</Button>
                        </Col>
                    </Row>
                </div>)
            }
        </div>
    );
};

export default PackageManaging;