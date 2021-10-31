import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://frightening-broomstick-18685.herokuapp.com/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    })

    const onSubmit = data => {
        console.log(data);
        axios.post('https://frightening-broomstick-18685.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Booked Successfully');
                    reset();
                }
            })
    };

    return (
        // Package details 
        <div className="body mt-5 text-start">

            <Container>
                <div className="d-flex justify-content-between">
                    <h2 className="text-primary">{service.name}</h2>
                    <div>
                        <h4 className="text-danger">BDT: {service.price}</h4>
                        <p> Per Person Twin/Triple Basis </p>
                    </div>
                </div>

                <Row className="py-3 my-2 bg-light rounded-3">
                    <Col xs={1} md={6} lg={4}>
                        <img className="w-75 ms-5 rounded-3" src={service.img1} alt="" />
                    </Col>
                    <Col xs={1} md={6} lg={8}>
                        <h4 className="text-info">{service.day1}</h4>
                        <h6>{service.description1}</h6>
                    </Col>
                </Row>

                <Row className="py-3 my-2 bg-light rounded-3">
                    <Col xs={1} md={6} lg={4}>
                        <img className="w-75 ms-5 rounded-3" src={service.img2} alt="" />
                    </Col>
                    <Col xs={1} md={6} lg={8}>
                        <h4 className="text-info">{service.day2}</h4>
                        <h6>{service.description2}</h6>
                    </Col>
                </Row>

                <Row className="py-3 my-2 bg-light rounded-3">
                    <Col xs={1} md={6} lg={4}>
                        <img className="w-75 ms-5 rounded-3" src={service.img3} alt="" />
                    </Col>
                    <Col xs={1} md={6} lg={8}>
                        <h4 className="text-info">{service.day3}</h4>
                        <h6>{service.description3}</h6>
                    </Col>
                </Row>
            </Container>

            {/* Booking form  */}
            <div className="add-package p-5 text-center">
                <h2>Book This Package</h2>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}

                    <input defaultValue={service.name} {...register("package")} />

                    <input placeholder="Date" type="date" defaultValue="" {...register("date")} />

                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" value="Book This Package" />
                </form>
            </div>
        </div>
    );
};

export default Booking;