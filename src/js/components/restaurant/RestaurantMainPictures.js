import React from 'react';

export default () => (
  <div className="position-relative cursor w-100">
    <div className="d-md-flex w-100 d-none" style={{height: 460}}>
      <div className="restaurant-img1 w-100 mr-1">
      </div>
      <div className="restaurant-img2 w-100">
      </div>
    </div>
    <div className="w-100 h-100 d-sm-none">
      <img className="img-fluid" src="/images/restaurants/restaurant1-1.jpeg" alt="restaurant"/>
    </div>
    <div className="w-100 restaurant-img3 d-none d-sm-block d-md-none" style={{height: 400}}>
    </div>
  </div>
);