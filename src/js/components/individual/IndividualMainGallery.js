import React from 'react';
import MdAirplay from 'react-icons/lib/md/airplay';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import { BtnInput } from "../reusable/Buttons";

const IndividualMainGallery = props => (
  <div className="position-relative cursor w-100">
    <BtnInput title="View Photos"
              classes="d-sm-none position-absolute position-right-bottom border-shadow bg-white"/>
    <BtnInput title="View Photos"
              classes="d-none d-sm-block position-absolute position-left-bottom border-shadow bg-white"/>
    <div className="d-sm-none position-absolute position-right-top">
      <HeartShareLinks />
    </div>
    <div className="d-none d-sm-block position-absolute position-right-top">
      <BtnInput title={<div><MdAirplay size={20}/> Share</div>}
                classes="border-shadow mr-3 bg-white"/>
      <BtnInput title={<div><MdFavoriteOutline size={20}/> Save</div>}
                classes="border-shadow bg-white"/>
    </div>
    <div className="d-sm-none">
      <img className="img-fluid w-100" src={props.photos[0]} alt="home"/>
    </div>
    <div className="d-none overflow-hidden d-sm-flex flex-nowrap w-100">
      <div className="mr-2 d-inline">
        <img src={props.photos[0]} alt="home"/>
      </div>
      <div className="mr-2 d-inline">
        <img src={props.photos[1]} alt="home"/>
      </div>
      <div className="mr-2 d-inline">
        <img src={props.photos[0]} alt="home"/>
      </div>
      <div className=" d-inline">
        <img src={props.photos[1]} alt="home"/>
      </div>
    </div>
  </div>
);

IndividualMainGallery.defaultProps = {
  photos: []
};

export const HeartShareLinks = () => (
  <React.Fragment>
    <MdAirplay color="white" className="mr-3" size={25}/>
    <MdFavoriteOutline color="white" size={25}/>
  </React.Fragment>
);

export default IndividualMainGallery;