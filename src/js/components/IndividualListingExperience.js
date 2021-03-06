import React from 'react';
import MdLocationOn from 'react-icons/lib/md/location-on';
import MdWatch from 'react-icons/lib/md/watch'
import FaList from 'react-icons/lib/fa/list';
import FaComments from 'react-icons/lib/fa/comments';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdEmail from 'react-icons/lib/md/email';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import { Header } from "./individual/IndividualReusable";
import { FixedPriceButton } from "./individual/Fixed";
import FixedSide from "./individual/FixedSide";
import Fixed from "./individual/Fixed";
import { CloseButton } from "./IndividualListing";
import Reviews from "./individual/Reviews";
import { individualExperienceListing } from "../reducer/listings";
import { FETCH_INDIVIDUAL_EXPERIENCE_DATA } from "../type";
import Navigation from "./reusable/Navigation";
import { BtnInput } from "./reusable/Buttons";
import FullPageModal from "./reusable/FullPageModal";
import OnOffWithMount from "../hoc/OnOffWithMount";
import GoogleMapApi from "./reusable/GoogleMapApi";
import { HeartShareLinks } from "./individual/IndividualMainGallery";
import { SimpleFooter } from "./reusable/Footer";

const IndividualListingExperience = props => {
  return(
    <div>
      <Navigation/>
      <div className="container-fluid px-0">
        <Picture classes="d-md-none position-relative"
                 photos={props.listing.photos}
                 secondInnerComponent={
                   <div className="position-absolute position-right-top">
                     <HeartShareLinks/>
                   </div>
                 }
                 innerComponent={
                   <BtnInput title="More photos"
                             classes="position-absolute position-right-bottom border-shadow bg-white"/>
                 }/>
        <div className="container mt-3 mb-5">
          <div className="row">
            <div className="point-reference col-md-7 col-lg-7 col-xl-8">
              <Header info={props.listing.simpleDescription}
                      title={props.listing.title}
                      location={props.listing.city}/>
              <div className="border-top pt-4 pb-2 font-weight-light border-bottom">
                <div>
                  <MdLocationOn size={20}/>{props.listing.municipality}
                </div>
                <div className="py-3">
                  <MdWatch size={20}/>{props.listing.length} hours total
                </div>
                <div>
                  <FaList size={20}/> Equipment
                </div>
                <div className="py-3">
                  <FaComments size={20} /> Offered in {props.listing.language}
                </div>
              </div>
              <TitleParagraph title={<h6>What we’ll do</h6>}
                              classes="border-bottom pt-4 pb-3"
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                              Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                              Maecenas cursus diam nibh, in finibus orci bibendum non. Praesent purus leo, interdum eget pharetra nec,
                              ultrices sit amet turpis. Vivamus blandit neque et arcu ornare mollis. Curabitur semper egestas nulla.
                              In aliquet, lectus vitae pharetra pulvinar, mauris libero blandit ante, quis sagittis est purus nec urna.
                              Ut maximus, arcu et pretium pharetra, odio tortor semper velit, eu aliquet nisi odio ac neque."/>
              <TitleParagraph title={<h6>What I’ll provide</h6>}
                              classes="border-bottom pt-4 pb-3"
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                              Quisque ornare arcu sed urna commodo, eu blandit erat ultrices."/>
              <TitleParagraph title={<h6>Who can come</h6>}
                              classes="border-bottom pt-4 pb-3"
                              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin"/>
              <div className="my-3">
                <TitleParagraph title={<h6 className="mb-3">Where we'll be</h6>}
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
              <Reviews />
            </div>
            <FixedSide class1="d-none d-md-block col position-fixed position-rt-0"
                       class2="container"
                       class3="row"
                       class4="col-md-7 col-lg-7 col-xl-8"
                       stick="col-md-5 col-lg-5 pt-1 col-xl-4"
                       notStick="d-md-block col-md-5 pt-1 col-lg-5 col-xl-4"
                       render={
                         <FullPageModal active={props.activeModal}
                                        classes="bg-lightWhite"
                                        InnerComponent={
                                          <div className="d-flex justify-content-center flex-column mx-2">
                                            <CloseButton clickOnOff={props.clickOnOff}/>
                                            <div>
                                              Dates Available coming soon
                                            </div>
                                          </div>
                                        }
                                        trigger={
                                          <ExperienceSide price={props.listing.price}
                                                          clickOnOff={props.clickOnOff}
                                                          photos={props.listing.photos}/>
                                        }/>
                       }/>
          </div>
        </div>
        <FullPageModal active={props.activeModal}
                       classes="bg-lightWhite"
                       InnerComponent={
                         <div className="d-flex justify-content-center flex-column mx-2">
                           <CloseButton clickOnOff={props.clickOnOff}/>
                           <div>
                             Dates Available coming soon
                           </div>
                         </div>
                       }
                       trigger={
                         <Fixed classes="d-md-none"
                                price={props.listing.price}
                                title="See dates"
                                clickOnOff={props.clickOnOff}/>
                       }/>
      </div>
      <div className="container">
        <SimpleFooter/>
      </div>
    </div>
  )
};

const Picture = props => (
  <div className={props.classes}>
    {
      props.innerComponent
    }
    {
      props.secondInnerComponent
    }
    <img className="img-fluid w-100"  src={props.photos[1]} alt="experience"/>
  </div>
);
Picture.defaultProps = {
  classes: " ",
  photos: []
};

const ExperienceSide = props => (
  <React.Fragment>
    <Picture photos={props.photos}
             classes="position-relative"
             innerComponent={
               <BtnInput title="More photos"
                         classes="position-absolute position-right-top border-shadow bg-white"/>
             }/>
    <FixedPriceButton classes="py-3 border-bottom"
                      price={props.price}
                      button={
                        <div className="my-auto">
                          <BtnInput title="See dates"
                                    onClick={() => props.clickOnOff("activeModal")}
                                    classes="btn-main px-4 py-2"/>
                        </div>
                      }/>
    <SaveOrShareBottom />
    <div className="border-top py-3 smallest-font text-center">
      Prices may vary depending on the date you select.
    </div>
  </React.Fragment>
);

export const TitleParagraph = props => (
  <div className={"font-weight-light " + props.classes}>
    {props.title}
    <p>
      {props.body}
    </p>
  </div>
);

export const SaveOrShareBottom = ({size, shouldDisplay}) => (
  <div className={"d-flex py-4 smaller-font "+(shouldDisplay?"justify-content-between":"")}>
    <div className={(shouldDisplay?"":"d-flex justify-content-between w-100 px-4")}>
      <a className="d-block-inline">
        <FaFacebook size={size}/>
      </a>
      <a className="mx-2">
        <FaTwitter size={size}/>
      </a>
      <a href="mailto:someone@example.com">
        <MdEmail size={size}/>
      </a>
      <a className="ml-2">
        <FaEllipsisH size={size}/>
      </a>
    </div>
    <div className={shouldDisplay?"":"d-none"}>
      Save to list <MdFavoriteOutline size={size}/>
    </div>
  </div>
);

SaveOrShareBottom.defaultProps = {
  size: 18,
  shouldDisplay: true
};

export default OnOffWithMount(IndividualListingExperience)(["v1/experience", "individualExperienceListing", FETCH_INDIVIDUAL_EXPERIENCE_DATA]);