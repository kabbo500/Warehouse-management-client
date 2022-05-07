import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/supra.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-success'>K.K. Car House Ltd</h1>
                    <p className='text-info'>3.5 litter Toyota gr Supra</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/crown.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-success'>K.K. Car House Ltd</h1>
                    <p className='text-info'>Toyota Royal Crown 2 litter petrol engine</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/s-class.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-success'>K.K. Car House Ltd</h1>
                    <p className='text-info'>4.5 litter v-8 petrol Marcedes s-class</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;