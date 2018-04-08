import React from 'react';
import MessageWithSearch from "./MessageWithSearch";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/repeat';


class MainGallery extends React.Component {
  state = {
    activeModal: false,
    active: 0
  };
  
  componentDidMount() {
    this.fiveSeconds$ = timer(5000,1000)
      .take(3)
      .repeat()
      .subscribe(result => {
        if (result > 1) this.setState(prevState => ({active: (prevState.active+1)%2}))
      })
  }
  
  componentWillUnmount() {
    this.fiveSeconds$.unsubscribe();
  }
  
  clickOnOff = (target) => {
    this.setState(prevState => ({
      [target]: !prevState[target]
    }))
  };
  
  render() {
    return(
      <div id="main-gallery" className="d-none d-md-block">
        <div className="position-relative w-100">
          <div id="img1" className={"position-absolute w-100 set-higher z-negative "+(this.state.active===0?"move-up-slow":"d-none")}>
          </div>
          <div id="img2" className={"position-absolute w-100 set-higher z-negative "+(this.state.active===1?"move-up-slow":"d-none")}>
          </div>
          <MessageWithSearch active={this.state.activeModal}
                             clickOnOff={this.clickOnOff}/>
        </div>
      </div>
    )
  }
}

export default MainGallery