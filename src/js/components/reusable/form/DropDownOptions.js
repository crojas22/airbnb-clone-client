import React from 'react';
import { Link } from "react-router-dom";

const DropDownOptions = props => (
  <div id="dropDown-options" className={"bg-white w-100 position-absolute border p-3 "+ props.active}>
    <p className="smaller-font font-weight-bold">
      Explore Airbnb
    </p>
    <div className="d-flex flex-wrap py-3">
      <Link to="search/homes" className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        All
      </Link>
      <Link to="search/homes" className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        Homes
      </Link>
      <Link to="search/experiences" className="p-2 border mr-3 mb-3 rounded smaller-font cursor hover-shadow">
        Experiences
      </Link>
      <Link to="search/restaurants" className="p-2 border mb-3 rounded smaller-font cursor hover-shadow">
        Restaurants
      </Link>
    </div>
    <p className="smaller-font">
      Recent Searches
    </p>
  </div>
);

export default DropDownOptions;