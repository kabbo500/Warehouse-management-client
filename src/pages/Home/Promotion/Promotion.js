import React from 'react';
import './Promotion.css'
const Promotion = () => {
    return (
        <div>
            <div className="container  mt-5">
                <h2 className='d-flex mb-4 justify-content-center text-primary'>WHY CHOOSE US?</h2>
                <div className="row ">

                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success'>FINANCING MADE EASY</h5>
                        <p>Our stress-free finance department that can find financial solution to save your money.</p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success'>WIDE RANGE OF BRANDS</h5>
                        <p>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12">
                        <h5 className='text-success'>TRUSTED BY THOUSANDS
                        </h5>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.

                        </p>
                    </div>
                    <div className="col mt-4 col-md-6 col-lg-3 col-12 ">
                        <h5 className='text-success'>CAR SERVICE & MAINTENANCE
                        </h5>
                        <p>Our service department maintain your car to stay safe on the road for many more years.

                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Promotion;