import React from 'react';
import MdAccountCircle from 'react-icons/lib/md/account-circle';

const Review = props => (
  <div className="border-bottom py-3">
    <div className="d-flex align-items-center">
      <div className="mr-3">
        <MdAccountCircle size={40} className="mb-0"/>
      </div>
      <div>
        <p className="mb-0">
          {
            props.name
          }
        </p>
        <p className="mb-0 font-weight-light font-regular">
          {
            props.date
          }
        </p>
      </div>
    </div>
    <div className="pt-3 font-weight-light">
      {
        props.note
      }
    </div>
  </div>
);

export default Review;