import React from 'react';
import MdGroup from 'react-icons/lib/md/group';
import MdHome from 'react-icons/lib/md/home';
import MdHotTub from 'react-icons/lib/md/hot-tub';
import MdHotel from 'react-icons/lib/md/hotel';
import MdClose from 'react-icons/lib/md/close';
import IndividualMainGallery from "./individual/IndividualMainGallery";
import Fixed from "./individual/Fixed";
import FixedSide from "./individual/FixedSide";
import Description from "./individual/Description";
import Reviews from "./individual/Reviews";
import QuickReservation from "./individual/QuickReservation";
import { Header } from "./individual/IndividualReusable";
import { FETCH_INDIVIDUAL_HOME_DATA } from "../type";
import Navigation from "./reusable/Navigation";
import FullPageModal from "./reusable/FullPageModal";
import OnOffWithMount from "../hoc/OnOffWithMount";
import GoogleMapApi from "./reusable/GoogleMapApi";
import { TitleParagraph } from "./IndividualListingExperience";
import { SimpleFooter } from "./reusable/Footer";

const IndividualListing = props => {
  return(
    <div>
      <Navigation/>
      <IndividualMainGallery photos={props.listing.photos}/>
      <div className="container mt-4 mb-5">
        <div className="row justify-content-between position-relative">
          <div className="point-reference col-lg-7 z-50">
            <Header info={props.listing.simpleDescription}
                    title={props.listing.title}
                    location={props.listing.city}/>
            <div className="d-flex justify-content-between justify-content-md-start">
              <div className="w-100 d-md-flex font-weight-light">
                <div className="mr-4 mb-2">
                  <MdGroup size={25} />{props.listing.guests} guests
                </div>
                <div className="mr-4 font-weight-light">
                  <MdHotel size={25}/>{props.listing.beds} beds
                </div>
                <div className="d-none d-md-block mr-md-4">
                  <MdHome size={25} />{props.listing.type}
                </div>
                <div className="d-none d-md-block">
                  <MdHotTub size={25}/>{props.listing.baths} bath
                </div>
              </div>
              <div className="w-100 d-md-none">
                <div className="mb-2">
                  <MdHome size={25} />{props.listing.type}
                </div>
                <div>
                  <MdHotTub size={25}/>{props.listing.baths} bath
                </div>
              </div>
            </div>
            <Description />
            <Reviews />
            <div className="mb-5">
              <TitleParagraph title={<h3 className="mb-3">The neighborhood</h3>}
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                            Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                            Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin."/>
              <GoogleMapApi
                height="400px"
                latitude={props.listing.location.latitude}
                longitude={props.listing.location.longitude}
              />
              <div className="my-2 text-muted font-weight-light">
                Exact location information is provided after a booking is confirmed.
              </div>
            </div>
          </div>
          <FixedSide class1="d-none d-lg-block col position-fixed position-rt-0"
                     class2="container"
                     class3="justify-content-between"
                     class4="col-lg-7"
                     stick="col-lg-4"
                     notStick="d-lg-block col-lg-4"
                     render={
                       <QuickReservation price={props.listing.price}
                                         sendAction={props.sendAction}
                                         listing={props.listing}
                                         per={props.listing.typeOfCharge}/>
                     }/>
        </div>
      </div>
      <FullPageModal active={props.activeModal}
                     classes="bg-lightWhite"
                     InnerComponent={
                       <div className="d-flex justify-content-center flex-column mx-2">
                         <CloseButton clickOnOff={props.clickOnOff}/>
                         <QuickReservation classes="border-shadow"
                                           price={props.listing.price}
                                           sendAction={props.sendAction}
                                           listing={props.listing}
                                           per={props.listing.typeOfCharge} />
                       </div>
                     }
                     trigger={
                       <Fixed classes="d-lg-none" clickOnOff={props.clickOnOff}
                              price={props.listing.price}
                              per={props.listing.typeOfCharge}/>
                     }/>
      <div className="container">
        <SimpleFooter/>
      </div>
    </div>
  )
};

export const CloseButton = props => (
  <div>
    <div onClick={() => props.clickOnOff("activeModal")}
         className="rounded-circle border d-inline-block p-1 mb-3 border-shadow bg-white cursor">
      <MdClose size={30} className="m-0"/>
    </div>
  </div>
);

export default OnOffWithMount(IndividualListing)(["v1/home", "individualHomeListing", FETCH_INDIVIDUAL_HOME_DATA]);