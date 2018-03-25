import React from 'react';

const FullPageModal = props => {
  return(
    <React.Fragment>
      {
        props.trigger
      }
      {
        props.active ?
          <div className={props.classes+" modal"}>
            {
              props.InnerComponent
            }
          </div>
          : null
      }
    </React.Fragment>
  )
};

export default FullPageModal;