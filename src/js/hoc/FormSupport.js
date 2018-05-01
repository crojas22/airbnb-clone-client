import React, { Component } from 'react';

const FormSupport = InnerComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: true,
        active2: false
      };
      this.focusHandle = this.focusHandle.bind(this);
    }
    
    focusHandle(e, search, active) {
      this.setState({[active]: e.target === document.getElementById(search)})
    }
    
    render() {
      return(
        <InnerComponent {...this.state} {...this.props} focusHandle={this.focusHandle}/>
      )
    }
  }
};

export default FormSupport;