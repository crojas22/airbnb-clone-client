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

export const PartialModal = ({active, InnerComponent, classes, style}) => (
  <div className={""+(active?"bg-lightWhite w-100 position-fixed z-150":"d-none")} style={{ height: "85vh", top: 140}}>
    <div className={classes} style={style}>
      {
        InnerComponent
      }
    </div>
  </div>
);