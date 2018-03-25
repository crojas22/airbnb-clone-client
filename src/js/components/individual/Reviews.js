import React from 'react';
import Review from "./Review";
import StarRating from "../reusable/StarRating";

const Reviews = () => (
  <div className="mb-5">
    <div className="d-flex pb-3 pt-4 border-bottom">
      <h3 className="mr-3">
        324 Reviews
      </h3>
      <h3>
        <StarRating/>
      </h3>
    </div>
    <div className="container-fluid">
      <div className="row pb-3">
        <div className="col-md-6 px-0 pr-md-3">
          <div className="d-flex justify-content-between py-2">
            <div>
              Accuracy
            </div>
            <StarRating/>
          </div>
          <div className="d-flex py-2 justify-content-between">
            <div>
              Communication
            </div>
            <StarRating/>
          </div>
          <div className="d-flex py-2 justify-content-between">
            <div>
              Cleanliness
            </div>
            <StarRating/>
          </div>
        </div>
        <div className="col-md-6 px-0 pl-md-3">
          <div className="d-flex justify-content-between py-2">
            <div>
              Accuracy
            </div>
            <StarRating/>
          </div>
          <div className="d-flex py-2 justify-content-between">
            <div>
              Communication
            </div>
            <StarRating/>
          </div>
          <div className="d-flex py-2 justify-content-between">
            <div>
              Cleanliness
            </div>
            <StarRating/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Review name="Marco" date="October 2017"
              note="Fantastic flat. Great host. Extremely helpful. Highly recommend this flat!!"/>
      <Review name="Alicia" date="January 2014"
              note="If you're looking for a place in Moscow, don't waste your time with other listings.
                This is THE BEST place you can stay.
                Beautiful kitchen and very comfortable, close to train station and markets.
                He is a really great host. I'll coming back very soon."/>
      <Review name="Ana" date="November 2017"
              note="Great host. Extremely helpful."/>
      <Review name="Mike" date="January 2016"
              note="If you're looking for a place in Moscow, don't waste your time with other listings.
                This is THE BEST place you can stay.
                Beautiful kitchen and very comfortable, close to train station and markets.
                He is a really great host. I'll coming back very soon."/>
    </div>
  </div>
)

export default Reviews;