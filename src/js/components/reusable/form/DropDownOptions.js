import React from 'react';

const DropDownOptions = props => (
  <div id="dropDown-options" className={"bg-white w-100 position-absolute border p-3 "+ props.active}>
    <p className="smaller-font font-weight-bold">
      Explore Airbnb
    </p>
    <div className="d-flex flex-wrap py-3">
      <div className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        All
      </div>
      <div className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        Homes
      </div>
      <div className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        Experiences
      </div>
      <div className="p-2 border mb-3 rounded smaller-font cursor hover-shadow">
        Restaurants
      </div>
    </div>
    <p className="smaller-font">
      Recent Searches
    </p>
  </div>
);

export default DropDownOptions;