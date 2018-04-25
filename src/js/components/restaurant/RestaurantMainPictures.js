import React from 'react';

export default ({photos}) => (
  <div className="position-relative cursor w-100">
    <div className="w-100 d-none d-md-flex d-xl-none" style={{height: 460}}>
      <div className="w-100 mr-1"
           style={{background: `url(${photos[0]}) center no-repeat`, backgroundSize: "cover"}}
      >
      </div>
      <div className="w-100"
           style={{background: `url(${photos[1]}) center no-repeat`, backgroundSize: "cover"}}
      >
      </div>
    </div>
    <div className="w-100 d-none d-xl-flex" style={{height: 460}}>
      <div className="w-100 mr-1"
           style={{background: `url(${photos[0]}) center no-repeat`, backgroundSize: "cover"}}
      >
      </div>
      <div className="mr-1 w-100"
           style={{background: `url(${photos[1]}) center no-repeat`, backgroundSize: "cover"}}
      >
      </div>
      <div className="w-100"
           style={{background: `url(${photos[0]}) center no-repeat`, backgroundSize: "cover"}}
      >
      </div>
    </div>
    <div className="w-100 h-100 d-sm-none">
      <img className="img-fluid" src={photos[0]} alt="restaurant"/>
    </div>
    <div className="w-100 d-none d-sm-block d-md-none"
         style={{background: `url(${photos[0]}) center no-repeat`, backgroundSize: "cover", height: 400}}
    >
    </div>
  </div>
);