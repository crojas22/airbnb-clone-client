import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchData } from "../action";

const OnOffWithMount = InnerComponent => parameter => {
  class Wrapper extends Component {
    state = {
      activeDrop: false,
      activeModal: false
    };
    
    componentDidMount() {
      this.props.fetchData(parameter[2], `${parameter[0]}/${this.props.match.params.id}`)
    }
  
    clickOnOff = target => {
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
  
  const mapStateToProps = state => ({
    listing: state[parameter[1]]
  });
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
      fetchData
    }, dispatch)
  );
  
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
};

export default OnOffWithMount;