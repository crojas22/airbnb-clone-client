import React from 'react';
import { Link } from "react-router-dom";
import StarRating from "../reusable/StarRating";
import { HeartShareLinks } from "../individual/IndividualMainGallery";

const SingleLink = props => (
  <Link to={`/listing/${props.to}/${props.id}`} className={props.classes} onClick={scrollTop}>
    {
      props.shouldDisplay ?
        <div className="position-absolute position-right-top">
          <HeartShareLinks />
        </div>: null
    }
    <img className="img-fluid w-100 rounded" src={props.photos[0]} alt={props.city}/>
    <div>
      <p className="m-0 py-1 text-uppercase upper-small text-brown">{props.simpleDescription} &middot; {props.city}</p>
      <h6 className="mb-1">{props.title}</h6>
      <p className="font-weight-light font-regular mb-1">${props.price} {props.typeOfCharge} {props.cancellation?' - '+props.cancellation:""}</p>
      <StarRating rating={4} total={40}/>
    </div>
  </Link>
);

SingleLink.defaultProps = {
  shouldDisplay: false
};

export const SingleRestaurantLink = props => (
  <Link to={`/listing/${props.to}/${props.id}`} className={props.classes} onClick={scrollTop}>
    {
      props.shouldDisplay ?
        <div className="position-absolute position-right-top">
          <HeartShareLinks />
        </div>: null
    }
    <img className="img-fluid w-100 rounded" src={props.photos[0]} alt={props.city}/>
    <div>
      <p className="m-0 py-1 text-uppercase upper-small text-brown">{props.simpleDescription}</p>
      <h6 className="mb-1">{props.title}</h6>
      <p className="font-weight-light smaller-font mb-1">
        {
          props.shortDescription
        }
      </p>
      <p className="font-weight-light smallest-font mb-1">
        {
          `About $${props.price} ${props.typeOfCharge}`
        }
      </p>
    </div>
  </Link>
);

SingleRestaurantLink.defaultProps = {
  shouldDisplay: false
};

export const scrollTop = (x=0, y=0) => window.scroll(x, y);

export default SingleLink;