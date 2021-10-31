import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useFirebase from '../../hooks/useFirebase';
import './MyPackages.css';


const MyPackages = () => {
    const { user } = useFirebase();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`https://frightening-broomstick-18685.herokuapp.com/myPackages/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [user.email]);

    const handleDelete = email => {
        axios.delete(`https://frightening-broomstick-18685.herokuapp.com/myPackages/${user?.email}`)
            .then(res => {
                console.log(res.data.deletedCount);
                if (res.data.deletedCount > 0) {
                    alert('Are you sure to delete this Package?');
                    console.log(res.data);
                }
            })
    }

    return (
        <div className="manage-packages">
            <h2 className="py-5">Manage Booked Packages</h2>
            {
                packages.map(pack => <div key={pack._id}>
                    <Row className="m-2 bg-secondary rounded-pill w-75 mx-auto p-3 text-white">
                        <Col>
                            <h4 className="text-start"> {pack.package} </h4>
                        </Col>
                        <Col>
                            <Button variant="outline-info" className="btn-dark" onClick={() => { handleDelete(pack.email) }}>Delete</Button>
                        </Col>
                    </Row>
                </div>)
            }
        </div>

    );
};

export default MyPackages;