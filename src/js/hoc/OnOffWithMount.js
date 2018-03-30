import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchData, sendAction } from "../action";
import { Loading } from "../components/reusable/Loading";
import { RESET_INDIVIDUAL_DATA } from "../type";

const OnOffWithMount = InnerComponent => parameter => {
  class Wrapper extends Component {
    state = {
      activeDrop: false,
      activeModal: false,
      loaded: false
    };
    
    componentDidMount() {
      this.props.fetchData(parameter[2], `${parameter[0]}/${this.props.match.params.id}`)
    }
    
    componentWillUnmount() {
      this.props.sendAction(RESET_INDIVIDUAL_DATA);
    }
  
    clickOnOff = target => {
      this.setState(prevState => ({
        [target]: !prevState[target]
      }))
    };
  
    render() {
      if (Object.keys(this.props.listing).length < 1) {
        return <Loading />
      }
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
      fetchData,
      sendAction
    }, dispatch)
  );
  
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
};

export default OnOffWithMount;