import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/z4_2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-success'>BMW Z4</h3>
                    <p>Three litter tween turbo engine</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/crown.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-success'>Toyota royal crown</h3>
                    <p>3.5 litter turbo charge v-6</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.linkpicture.com/q/supra.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-success'>Toyota gr supra</h3>
                    <p>
                        3.5 litter tween turbo charge engine
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;