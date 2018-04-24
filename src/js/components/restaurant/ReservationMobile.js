import React from 'react';

export default () => {
  return(
    <div className="d-md-none">
      <div className="d-flex justify-content-between border-bottom pb-2">
        <h5 className="font-weight-light">
          Table for 3 &middot; Apr 21
        </h5>
        <div className="font-weight-light color-green">
          Change
        </div>
      </div>
      <div className="d-flex flex-nowrap overflow-x mt-2">
        <ReservationSlot classes="my-3 mr-2"/>
        <ReservationSlot classes="my-3 mr-2"/>
        <ReservationSlot classes="my-3 mr-2"/>
        <ReservationSlot classes="my-3 mr-2"/>
        <ReservationSlot classes="my-3 mr-2"/>
      </div>
    </div>
  )
}

export const ReservationSlot = ({classes}) => (
  <div className={classes + " bg-green text-white d-inline-block py-1 px-4 rounded text-center"}>
    <div className="smallest-font">
      7:00 PM
    </div>
    <div className="text-nowrap" style={{fontSize: 9}}>
      DINNING ROOM
    </div>
  </div>
);