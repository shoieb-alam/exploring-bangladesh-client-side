import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './MyPackages.css';


const MyPackages = () => {
    const { bookingId } = useParams();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`https://frightening-broomstick-18685.herokuapp.com/mybookings/${bookingId}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [bookingId]);

    return (
        <div className="body">
            <h1>My Package:{packages.length}</h1>
        </div>
    );
};

export default MyPackages;