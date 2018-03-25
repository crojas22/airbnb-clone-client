import React, { Component } from 'react';

const OnOff = InnerComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeDrop: false,
        activeModal: false
      };
      this.clickOnOff = this.clickOnOff.bind(this);
    }
    
    clickOnOff(target) {
      this.setState(prevState => ({
        [target]: !prevState[target]
      }))
    };
    
    render() {
      return(
        <InnerComponent {...this.state} {...this.props} clickOnOff={this.clickOnOff}/>
      )
    }
  }
};

export default OnOff;