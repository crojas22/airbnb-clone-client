import React from 'react';
import MdStar from "react-icons/lib/md/star";
import MdStarOutline from "react-icons/lib/md/star-outline";
import MdStarHalf from "react-icons/lib/md/star-half";

const StarRating = props => {
  return(
    <div id="start-rating">
      <MdStar size={props.size}/><MdStar size={props.size}/><MdStar size={props.size}/><MdStarHalf size={props.size}/><MdStarOutline size={props.size}/>
      <span className="font-regular">
        {
          props.total
        }
      </span>
    </div>
  )
};

StarRating.defaultProps = {
  size: null
};

export default StarRating;