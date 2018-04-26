import React from 'react';
import { Link } from "react-router-dom";
import { scrollTop } from "./SingleLink";

const ExploreLinks = () => (
  <div className="container-fluid bg-white py-4 px-0">
    <h4 className="my-2">
      Explore Airbnb
    </h4>
    <div className="d-flex overflow-x py-2">
      <Link to="/search/homes" onClick={scrollTop} className="d-lg-flex align-items-lg-center w-lg-100 border-shadow rounded mr-3">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/living-room.jpeg" alt="living-room"/>
        </div>
        <p className="p-3 m-0">
          Homes
        </p>
      </Link>
      <Link to="/search/experiences" onClick={scrollTop} className="d-lg-flex w-lg-100 align-items-lg-center border-shadow rounded mr-3">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/experience-bicycle.jpeg" alt="bicicle"/>
        </div>
        <p className="p-3 m-0">
          Experiences
        </p>
      </Link>
      <Link to="/search/restaurants" onClick={scrollTop} className="d-lg-flex w-lg-100 align-items-lg-center border-shadow rounded">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/experience-restaurant.jpeg" alt="restaurant"/>
        </div>
        <p className="p-3 m-0">
          Restaurants
        </p>
      </Link>
    </div>
  </div>
);

export default ExploreLinks;