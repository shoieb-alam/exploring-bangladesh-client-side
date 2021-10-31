import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Success from '../Success/Success';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="info" className="m-5 p-5" />
    }
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Success></Success>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;