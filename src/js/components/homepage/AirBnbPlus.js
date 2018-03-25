import React from 'react';
import { BtnLink } from "../reusable/Buttons";

const AirBnbPlus = () => (
  <div className="container-fluid px-md-5 pb-3">
    <h4 className="my-2">
      Introducing Airbnb Plus
    </h4>
    <div className="py-2 position-relative h-300 w-100">
      <div className="position-absolute z-50 mx-4 px-2 mx-md-5 top-30">
        <div className="d-lg-none">
          <h5 >A new selection of homes </h5>
          <h5 >verified for quality & comfort.</h5>
        </div>
        <div className="d-none d-lg-block">
          <h4>A new selection of homes </h4>
          <h4>verified for quality & comfort.</h4>
        </div>
        <BtnLink to="/" title="Explore Airbnb Plus homes"
                 classes="border-shadow mt-3 text-dark border bg-white rounded py-2 py-md-3 px-4"/>
      </div>
      <div className="position-absolute border rounded d-block bg-leftWhite h-300 w-100">
        <div id="plus-img" className="position-absolute z-negative">
        </div>
      </div>
    </div>
  </div>
);

export default AirBnbPlus;