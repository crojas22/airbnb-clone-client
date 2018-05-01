import React from 'react';

export default ({trigger, active, InnerComponent, classes}) => {
  return(
    <React.Fragment>
      {
        trigger
      }
      {
        active ?
          <div className={classes+" modal"}>
            {
              InnerComponent
            }
          </div>
          : null
      }
    </React.Fragment>
  )
};

export const PartialModal = ({active, InnerComponent, clickOff}) => (
  <div className={"d-none "+(active?"bg-lightWhite w-100 position-fixed z-150 d-sm-block":"")}
       id="partialModal"
       style={{ height: "85vh", top: 140}}
       onClick={clickOff}
  >
    {
      InnerComponent
    }
  </div>
);