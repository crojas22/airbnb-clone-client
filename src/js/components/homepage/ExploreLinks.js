import React from 'react';

const ExploreLinks = () => (
  <div className="container-fluid bg-white py-4 p-md-5">
    <h4 className="my-2">
      Explore Airbnb
    </h4>
    <div className="d-flex overflow-x py-2">
      <div className="d-lg-flex align-items-lg-center w-lg-100 border-shadow rounded mr-3">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/living-room.jpeg" alt="living-room"/>
        </div>
        <p className="p-3 m-0">
          Homes
        </p>
      </div>
      <div className="d-lg-flex w-lg-100 align-items-lg-center border-shadow rounded mr-3">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/experience-bicycle.jpeg" alt="bicicle"/>
        </div>
        <p className="p-3 m-0">
          Experiences
        </p>
      </div>
      <div className="d-lg-flex w-lg-100 align-items-lg-center border-shadow rounded">
        <div>
          <img className="size-190-85 img-fluid w-100" src="/images/misc/experience-restaurant.jpeg" alt="restaurant"/>
        </div>
        <p className="p-3 m-0">
          Restaurants
        </p>
      </div>
    </div>
  </div>
)

export default ExploreLinks;