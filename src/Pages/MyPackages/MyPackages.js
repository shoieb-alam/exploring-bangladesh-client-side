import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import './MyPackages.css';


const MyPackages = () => {
    const { bookingId } = useParams();
    const { user } = useFirebase();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${bookingId}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [user.bookingId]);

    return (
        <div className="body">
            <h1>My Package:{packages.length}</h1>
        </div>
    );
};

export default MyPackages;