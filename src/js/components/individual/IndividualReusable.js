import React from 'react';
import MdAccountCircle from 'react-icons/lib/md/account-circle';

export const Header = props => (
  <div className="d-flex align-items-center">
    <div className="w-100">
      <p className="m-0 pt-1 text-uppercase upper-small text-brown">
        {props.info}
      </p>
      <h1 className="m-0">
        {props.title}
      </h1>
      <p className="font-2">
        {props.location}
      </p>
    </div>
    <div>
      <MdAccountCircle size={60}/>
    </div>
  </div>
);