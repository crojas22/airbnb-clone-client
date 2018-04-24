import React, { Component } from 'react';
import Navigation from "./reusable/Navigation";
import RestaurantMainPictures from "./restaurant/RestaurantMainPictures";
import { RestaurantHeader } from "./individual/IndividualReusable";
import ReservationMobile from "./restaurant/ReservationMobile";
import FaTicket from 'react-icons/lib/fa/ticket';
import MdLocationOn from 'react-icons/lib/md/location-on';
import FixedSide from "./individual/FixedSide";
import RestaurantReservationSide from "./restaurant/RestaurantReservationSide";
import { SaveOrShareBottom, TitleParagraph } from "./IndividualListingExperience";
import Review from "./individual/Review";
import RestaurantInfoCard from "./restaurant/RestaurantInfoCard";
import { SimpleFooter } from "./reusable/Footer";

export default class extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <RestaurantMainPictures />
        <div className="container my-4">
          <div className="row">
            <div className="point-reference col-md-7 col-lg-6">
              <RestaurantHeader size={13}/>
              <ReservationMobile />
              <div className="mt-1 mt-md-4 border-bottom pb-5 d-xl-flex">
                <div className="mr-xl-5">
                  <div className="pb-4 mb-2">
                    <div className="font-2">
                      <FaTicket/> Price range
                    </div>
                    <div className="font-1 font-weight-light d-xl-none">
                      Around $45 per person
                    </div>
                  </div>
                  <div>
                    <div className="font-2">
                      <MdLocationOn/> Neighborhood
                    </div>
                    <div className="font-1 font-weight-light d-xl-none">
                      Brickell, Miami
                    </div>
                  </div>
                </div>
                <div className="d-none d-xl-flex flex-column justify-content-center ">
                  <div className="pb-3 mb-3">
                    <div className="font-1 font-weight-light">
                      Around $45 per person
                    </div>
                  </div>
                  <div className="font-1 font-weight-light mt-1">
                    Brickell, Miami
                  </div>
                </div>
              </div>
              <TitleParagraph title={<h5>About Perricone's Marketplace & Cafe</h5>}
                              classes="border-bottom pt-4 pb-3"
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                              Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                              Maecenas cursus diam nibh, in finibus orci bibendum non. Praesent purus leo, interdum eget pharetra nec,
                              ultrices sit amet turpis. Vivamus blandit neque et arcu ornare mollis. Curabitur semper egestas nulla.
                              In aliquet, lectus vitae pharetra pulvinar, mauris libero blandit ante, quis sagittis est purus."/>
              <div className="d-md-none border-bottom">
                <SaveOrShareBottom size={23}
                                   shouldDisplay={false}
                />
              </div>
              <div className="mt-4 pb-1">
                <h5>Tips from hosts</h5>
                <Review name="Marco" date="October 2017"
                        note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                              Quisque ornare arcu sed urna commodo, eu blandit erat ultrices."/>
                <Review name="Alicia" date="January 2014"
                        note="Praesent purus leo, interdum eget pharetra nec,
                              ultrices sit amet turpis. Vivamus blandit neque et arcu ornare mollis. Curabitur semper egestas nulla."/>
                <Review name="Ana" date="November 2017"
                        note="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin."/>
                <div className="font-weight-light my-4 color-green">
                  Read all 4 tips
                </div>
              </div>
              <RestaurantInfoCard />
            </div>
            <FixedSide class1="d-none d-md-block col position-fixed position-rt-0"
                       class2="container"
                       class3="justify-content-between"
                       class4="col-md-7 col-lg-6"
                       stick="col-md-5 col-lg-6"
                       notStick="d-md-block col-md-5 col-lg-6"
                       render={
                         <RestaurantReservationSide />
                       }/>
          </div>
        </div>
        <div className="container">
          <SimpleFooter/>
        </div>
      </div>
    )
  }
}