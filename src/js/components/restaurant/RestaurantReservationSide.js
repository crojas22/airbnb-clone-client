import React from 'react';
import { GuestOnlyDropDown, LabelInputDropDownTrigger } from "../individual/QuickReservation";
import { ReservationSlot } from "./ReservationMobile";
import { SaveOrShareBottom } from "../IndividualListingExperience";
import {
  DECREASE_RESTAURANT_GUEST_COUNT, INCREASE_RESTAURANT_GUEST_COUNT,
  TOGGLE_GUESTS_DROPDOWN_RESTAURANT
} from "../../type";

export default ({classes, listing, sendAction}) => (
  <div className="mx-auto" style={{maxWidth: 420}}>
    <form className={"p-4 border-left border-right mx-auto border-bottom border-top-green bg-white " + classes}>
      <LabelInputDropDownTrigger header="Dates"
                                 label="Sun, Apr 22"
                                 listing={{settings: {guestsDropdownIsOpen: false}}}
                                 sendAction={sendAction}
                                 DropDownComponent={<div>calendar</div>}
      />
      <LabelInputDropDownTrigger header="Guests"
                                 label={`${listing.guestCount.guests} ${listing.guestCount.guests>1?"guests":"guest"}`}
                                 listing={listing}
                                 actionGuestTypeToggle={TOGGLE_GUESTS_DROPDOWN_RESTAURANT}
                                 sendAction={sendAction}
                                 dropDownComponent={
                                   <GuestOnlyDropDown
                                     sendAction={sendAction}
                                     listing={listing}
                                     actionIncreaseGuestAdult={INCREASE_RESTAURANT_GUEST_COUNT}
                                     actionDecreaseGuestAdult={DECREASE_RESTAURANT_GUEST_COUNT}
                                     actionGuestTypeToggle={TOGGLE_GUESTS_DROPDOWN_RESTAURANT}
                                   />
                                 }
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
);