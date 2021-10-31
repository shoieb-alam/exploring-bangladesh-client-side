import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div id="banner">
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Tv9ktZ5/image.png"
                            alt="First slide"
                        />

                        <Carousel.Caption className="m-5 p-5">
                            <h3>Welcome to Beautiful Bangladesh</h3>
                            <p>Bangladesh, country of south-central Asia, located in the delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in the northeastern part of the Indian subcontinent. The riverine country of Bangladesh (“Land of the Bengals”) is one of the most densely populated countries in the world.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/cwf4BSf/image.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="m-5 p-5 bg-carousel">
                            <h3>LET'S EXPLORE ...</h3>
                            <p>Bangladesh is bordered by the Indian states of West Bengal to the west and north, Assam to the north, Meghalaya to the north and northeast, and Tripura and Mizoram to the east..</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/8BHKChN/image.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="m-5 p-5 bg-carousel">
                            <h3>X-PLORING BANGLADESH</h3>
                            <p>To the southeast, it shares a boundary with Myanmar (Burma). The southern part of Bangladesh opens into the Bay of Bengal.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;