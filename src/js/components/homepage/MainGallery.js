import React from 'react';
import MessageWithSearch from "./MessageWithSearch";

class MainGallery extends React.Component {
  state = {
    activeModal: false,
    isVisible: document.visibilityState,
    active: 0
  };
  
  componentDidMount() {
    document.addEventListener("visibilitychange",this.checkVisibility, false);
    this.timer = setInterval(this.createTimer, 7000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  createTimer = () => this.setState(prevState => ({active: (prevState.active+1)%2}));
  
  checkVisibility = () => {
    this.setState({isVisible: document.visibilityState});
    if (this.state.isVisible === "hidden") {
      clearInterval(this.timer);
    }
    if (this.state.isVisible === "visible") {
      this.timer = setInterval(this.createTimer, 7000)
    }
  };
  
  clickOnOff = (target) => {
    this.setState(prevState => ({
      [target]: !prevState[target]
    }))
  };
  
  render() {
    return(
      <div id="main-gallery" className="d-none d-md-block">
        <div className="position-relative w-100">
          {
            this.state.isVisible === "visible" ?
              <React.Fragment>
                <div id="img1" style={{display: (this.state.active===0? "": "none")}} className={"position-absolute w-100 set-higher z-negative move-up-slow"}>
                </div>
                <div id="img2" style={{display: (this.state.active===1? "": "none")}} className={"position-absolute w-100 set-higher z-negative move-up-slow"}>
                </div>
              </React.Fragment>: null
          }
          <MessageWithSearch active={this.state.activeModal}
                             activeBackground={this.state.active}
                             clickOnOff={this.clickOnOff}/>
        </div>
      </div>
    )
  }
}

export default MainGallery