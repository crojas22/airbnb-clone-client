import React from 'react';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdKeyboardArrowUp from 'react-icons/lib/md/keyboard-arrow-up';
import IoIosMinusOutline from 'react-icons/lib/io/ios-minus-outline';
import IoIosPlusOutline from 'react-icons/lib/io/ios-plus-outline';
import StarRating from "../reusable/StarRating";
import { BtnInput } from "../reusable/Buttons";
import {
  DECREASE_HOME_GUEST_COUNT_ADULTS, DECREASE_HOME_GUEST_COUNT_CHILDREN, DECREASE_HOME_GUEST_COUNT_INFANTS,
  INCREASE_HOME_GUEST_COUNT_ADULTS,
  INCREASE_HOME_GUEST_COUNT_CHILDREN, INCREASE_HOME_GUEST_COUNT_INFANTS,
  TOGGLE_GUESTS_DROPDOWN_HOME
} from "../../type";

const QuickReservation = ({listing, classes, price, per, sendAction}) => {
  const totalGuest = listing.guestCount.adults + listing.guestCount.children;
  return(
    <form className={"p-3 border bg-white " + classes}>
      <div className="pb-3 border-bottom">
        <span className="mr-2 font-2">${price}</span>
        <span className="font-regular d-inline-block">{per}</span>
        <StarRating total={50}/>
      </div>
      <div className="my-3">
        <div>
          <label className="m-0 font-regular font-weight-light">Dates</label>
          <div className="d-flex align-items-center">
            <input placeholder="Check In" className="border-right-0 border px-3 py-30 w-50 font-weight-light"/>
            <div className="border-top border-bottom py-30">
              <MdArrowForward size={15}/>
            </div>
            <input placeholder="Check Out" className="border-left-0 border px-3 py-30 w-50 font-weight-light"/>
          </div>
        </div>
        <LabelInputDropDownTrigger header="Guests"
                                   sendAction={sendAction}
                                   listing={listing}
                                   label={`${totalGuest} ${totalGuest>1?"guests":"guest"}${`${(listing.guestCount.infants > 0?', '+listing.guestCount.infants+ (listing.guestCount.infants<2?' infant': ' infants'): '')}`}`}
                                   actionGuestTypeToggle={TOGGLE_GUESTS_DROPDOWN_HOME}
                                   dropDownComponent={
                                     <GuestsDropdownOptions
                                       adultsCount={listing.guestCount.adults}
                                       childrenCount={listing.guestCount.children}
                                       infantsCount={listing.guestCount.infants}
                                       sendAction={sendAction}
                                       listing={listing}
                                       actionGuestTypeToggle={TOGGLE_GUESTS_DROPDOWN_HOME}
                                       actionIncreaseGuestAdult={INCREASE_HOME_GUEST_COUNT_ADULTS}
                                       actionDecreaseGuestAdult={DECREASE_HOME_GUEST_COUNT_ADULTS}
                                       actionIncreaseGuestChildren={INCREASE_HOME_GUEST_COUNT_CHILDREN}
                                       actionDecreaseGuestChildren={DECREASE_HOME_GUEST_COUNT_CHILDREN}
                                       actionIncreaseGuestInfants={INCREASE_HOME_GUEST_COUNT_INFANTS}
                                       actionDecreaseGuestInfants={DECREASE_HOME_GUEST_COUNT_INFANTS}
                                       disableMinusAdult={listing.guestCount.adults < 2}
                                       disablePlusAdult={listing.guests <= totalGuest}
                                       disableMinusChildren={listing.guestCount.children < 1}
                                       disablePlusChildren={listing.guests <= totalGuest}
                                       disableMinusInfants={listing.guestCount.infants < 1}
                                       disablePlusInfants={listing.guestCount.infants > 4}
                                       disclaimer={
                                         `${listing.guests} guests maximum. Infants don’t count toward the number of guests.`
                                       }
                                     />
                                   }
        />
        <BtnInput title="Request to Book" classes="btn-main mt-2 font-2 px-3 w-100"/>
        <div className="text-center pt-2 smallest-font">
          You won’t be charged yet
        </div>
      </div>
    </form>
  )
};

export const LabelInputDropDownTrigger = ({label, header, sendAction, listing, actionGuestTypeToggle, dropDownComponent}) => (
  <div className="my-3 position-relative">
    <label className="m-0 font-regular font-weight-light">{header}</label>
    <div className="d-flex align-items-center" onClick={() => sendAction(actionGuestTypeToggle)}>
      <div className="border w-100 rounded-0 p-2 d-flex justify-content-between align-items-center cursor">
        <span className={"py-1 px-2 font-weight-light "+(listing.settings.guestsDropdownIsOpen?"bg-light-green text-green rounded":"text-muted")}>
          {
            label
          }
          </span>
        <span>
          {
            listing.settings.guestsDropdownIsOpen ? <MdKeyboardArrowUp size={25} className="mb-0"/> :<MdKeyboardArrowDown size={25} className="mb-0"/>
          }
        </span>
      </div>
    </div>
    {listing.settings.guestsDropdownIsOpen && (
      dropDownComponent
    )}
  </div>
);

export const GuestsDropdownOptions = ({
                                        sendAction,
                                        actionGuestTypeToggle,
                                        listing,
                                        actionIncreaseGuestAdult,
                                        actionDecreaseGuestAdult,
                                        actionIncreaseGuestChildren,
                                        actionDecreaseGuestChildren,
                                        actionIncreaseGuestInfants,
                                        actionDecreaseGuestInfants,
                                        totalGuest,
                                        disableMinusAdult,
                                        disablePlusAdult,
                                        disableMinusChildren,
                                        disablePlusChildren,
                                        disableMinusInfants,
                                        disablePlusInfants,
                                        adultsCount,
                                        childrenCount,
                                        infantsCount,
                                        disclaimer
                                      }) => (
  <div className="position-absolute w-100 bg-white py-2 px-3 border-right border-left border-bottom border-top-green">
    <div className="d-flex justify-content-between align-items-center pt-3">
      <div className="font-1">
        Adults
      </div>
      <div className="d-flex align-items-center justify-content-between w-50 pl-xl-3">
        <div>
          <BtnInput title={<IoIosMinusOutline className="m-0" size={35} color={"#008488"}/>}
                    classes="p-0"
                    disabled={disableMinusAdult}
                    onClick={() => sendAction(actionDecreaseGuestAdult)}
          />
        </div>
        <div className="mx-3 font-1">
          {
            adultsCount
          }
        </div>
        <div>
          <BtnInput title={<IoIosPlusOutline className="m-0" size={35} color={"#008488"}/>}
                    classes="p-0"
                    disabled={disablePlusAdult}
                    onClick={() => sendAction(actionIncreaseGuestAdult)}
          />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center py-4">
      <div>
        <div className="font-1">
          Children
        </div>
        <div className="smallest-font font-weight-light">
          Ages 2 - 12
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-50 pl-xl-3">
        <div>
          <BtnInput title={<IoIosMinusOutline className="m-0" size={35} color={"#008488"}/>}
                    onClick={() => sendAction(actionDecreaseGuestChildren)}
                    disabled={disableMinusChildren}
                    classes="p-0"
          />
        </div>
        <div className="mx-3 font-1">
          {
            childrenCount
          }
        </div>
        <div>
          <BtnInput title={<IoIosPlusOutline  className="m-0" size={35} color={"#008488"}/>}
                    classes="p-0"
                    onClick={() => sendAction(actionIncreaseGuestChildren)}
                    disabled={disablePlusChildren}
          />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center pb-3">
      <div>
        <div className="font-1">
          Infants
        </div>
        <div className="smallest-font font-weight-light">
          Under 2
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-50 pl-xl-3">
        <div>
          <BtnInput
            title={<IoIosMinusOutline
              className="m-0"
              size={35}
              color={"#008488"}/>}
            onClick={() => sendAction(actionDecreaseGuestInfants)}
            disabled={disableMinusInfants}
            classes="p-0"/>
        </div>
        <div className="font-1 mx-3">
          {
            infantsCount
          }
        </div>
        <div>
          <BtnInput
            classes="p-0"
            onClick={() => sendAction(actionIncreaseGuestInfants)}
            title={<IoIosPlusOutline className="m-0" size={35} color={"#008488"}/>}
            disabled={disablePlusInfants}
          />
        </div>
      </div>
    </div>
    <div className="smallest-font font-weight-light">
      {
        disclaimer
      }
    </div>
    <div className="d-flex justify-content-between mt-4 mb-3">
      <div className="font-regular cursor underline-hover" onClick={() => sendAction(actionGuestTypeToggle)}>
        Cancel
      </div>
      <div className="font-regular cursor underline-hover color-green">
        Apply
      </div>
    </div>
  </div>
);

export const GuestOnlyDropDown = ({sendAction, actionGuestTypeToggle, listing, actionIncreaseGuestAdult, actionDecreaseGuestAdult}) => (
  <div className="position-absolute w-100 bg-white py-2 px-3 border-right border-left border-bottom border-top-green">
    <div className="d-flex justify-content-between align-items-center pt-3">
      <div className="font-1">
        Guests
      </div>
      <div className="d-flex align-items-center">
        <div>
          <BtnInput title={<IoIosMinusOutline className="m-0" size={35} color={"#008488"}/>}
                    classes="p-0"
                    disabled={listing.guestCount.guests < 2}
                    onClick={() => sendAction(actionDecreaseGuestAdult)}
          />
        </div>
        <div className="mx-3 font-1">
          {
            listing.guestCount.guests
          }
        </div>
        <div>
          <BtnInput title={<IoIosPlusOutline className="m-0" size={35} color={"#008488"}/>}
                    classes="p-0"
                    disabled={listing.guestCount.guests > 7}
                    onClick={() => sendAction(actionIncreaseGuestAdult)}
          />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between mt-4 mb-3">
      <div className="font-regular cursor underline-hover" onClick={() => sendAction(actionGuestTypeToggle)}>
        Cancel
      </div>
      <div className="font-regular cursor underline-hover color-green">
        Apply
      </div>
    </div>
  </div>
);

export default QuickReservation;