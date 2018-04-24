import React from 'react';
import { LabelInputDropDownTrigger } from "../individual/QuickReservation";
import { ReservationSlot } from "./ReservationMobile";
import { SaveOrShareBottom } from "../IndividualListingExperience";

export default ({classes}) => (
  <div className="mx-auto" style={{maxWidth: 420}}>
    <form className={"p-4 border-left border-right mx-auto border-bottom border-top-green bg-white " + classes}>
      <LabelInputDropDownTrigger header="Dates"
                                 label="Sun, Apr 22"
      />
      <LabelInputDropDownTrigger header="Guests"
                                 label="2 guests"
      />
      <div className="d-flex flex-wrap mt-4">
        <ReservationSlot classes="mx-auto mb-2"/>
        <ReservationSlot classes="mx-auto mb-2"/>
        <ReservationSlot classes="mx-auto mb-2"/>
        <ReservationSlot classes="mx-auto mb-2"/>
        <ReservationSlot classes="mx-auto mb-2"/>
        <ReservationSlot classes="mx-auto mb-2"/>
      </div>
      <div className="color-green mt-3">
        Show all times >
      </div>
    </form>
    <SaveOrShareBottom />
  </div>
)