import React from 'react';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdKeyboardArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import { TitleParagraph } from "../IndividualListingExperience";
import OnOff from "../../hoc/OnOff";

const Description = props => (
  <div className="border-bottom pb-4">
    <div className="font-weight-light my-3">
      A great studio in the central areal of Moscow suitable both for travellers and businessmen.
      It is fully equipped with all you might need and freshly renovated.
    </div>
    {
      props.activeDrop ?
        <div>
          <TitleParagraph title="The space"
                          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                            Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin."/>
          <TitleParagraph title="Guest access"
                          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin.
                            Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                            Quisque ornare arcu sed urna commodo, eu blandit erat ultrices.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo id erat volutpat sollicitudin."/>
          <div className="text-green cursor" onClick={() => props.clickOnOff("activeDrop")}>
            Hide <MdKeyboardArrowUp size={20} className="mb-0"/>
          </div>
        </div>
        :
        <div className="text-green cursor" onClick={() => props.clickOnOff("activeDrop")}>
          Read more about the space <MdKeyboardArrowDown size={20} className="mb-0"/>
        </div>
    }
  </div>
);

export default OnOff(Description);