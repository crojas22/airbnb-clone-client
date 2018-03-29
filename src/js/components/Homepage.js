import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Navigation from "./reusable/Navigation";
import MainGallery from "./homepage/MainGallery";
import ExploreLinks from "./homepage/ExploreLinks";
import AirBnbPlus from "./homepage/AirBnbPlus";
import { fetchData } from "../action";
import { FETCH_DATA } from "../type";
import GroupOfLinks from "./homepage/GroupOfLinks";

class Homepage extends Component {
  
  componentDidMount() {
    this.props.fetchData(FETCH_DATA, "v1/home")
  }
  
  render() {
    return(
      <div>
        <Navigation />
        <MainGallery />
        <div className="mx-xl-5">
          <ExploreLinks />
          <AirBnbPlus />
          <GroupOfLinks title="Homes around the world" to="home"
                        homeListing={this.props.homeListing}/>
          <GroupOfLinks title="Experiences in the spotlight" to="experience"
                        homeListing={this.props.experienceListing}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  homeListing: state.listings.homeListing.content,
  experienceListing: state.listings.experienceListing.content
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);