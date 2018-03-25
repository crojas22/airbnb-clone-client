import React from 'react';
import OnOff from "../../hoc/OnOff";
import MessageWithSearch from "./MessageWithSearch";

const MainGallery = props => (
  <div id="main-gallery" className="d-none d-md-block">
    <div className="position-relative w-100 " >
      <div id="img1" className="position-absolute z-negative">
      </div>
      <div className="d-flex align-items-center justify-content-center set-height">
        <MessageWithSearch active={props.activeModal}
                           clickOnOff={props.clickOnOff}/>
      </div>
    </div>
  </div>
);

export default OnOff(MainGallery);