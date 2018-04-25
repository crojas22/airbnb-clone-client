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
import { BtnLink } from "./reusable/Buttons";
import { scrollTop, SingleRestaurantLink } from "./homepage/SingleLink";
import Footer from "./reusable/Footer";
import { Loading } from "./reusable/Loading";
import Restaurant from "./Restaurant";
import SingleLink from "./homepage/SingleLink";

class Homepage extends Component {
  state = {
    loading: true
  };
  
  async componentDidMount() {
    await this.props.fetchData(FETCH_DATA, "v1/homepage");
    this.setState({loading: false});
  }
  
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return(
      <div>
        <Navigation />
        <MainGallery />
        <div className="bg-white">
          <div className="container">
            <ExploreLinks />
          </div>
        </div>
        <div className="container">
          <AirBnbPlus />
          <GroupOfLinks title="Homes around the world" to="home"
                        component={SingleLink}
                        linkTo={
                          <BtnLink to="search/homes" onClick={scrollTop} classes="pl-0 color-green my-2" title="Show all (2000+) >"/>
                        }
                        homeListing={this.props.homeListing}/>
          <GroupOfLinks title="Experiences in the spotlight" to="experience"
                        component={SingleLink}
                        linkTo={
                          <BtnLink to="search/experiences" onClick={scrollTop} classes="pl-0 color-green my-2" title="Show all (2000+) >"/>
                        }
                        homeListing={this.props.experienceListing}/>
          <GroupOfLinks title="Restaurants in America" to="restaurant"
                        component={SingleRestaurantLink}
                        linkTo={
                          <BtnLink to="search/experiences" onClick={scrollTop} classes="pl-0 color-green my-2" title="Show all (2000+) >"/>
                        }
                        homeListing={this.props.restaurants}/>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  homeListing: state.listings.homeListing.content,
  experienceListing: state.listings.experienceListing.content,
  restaurants: state.listings.restaurants.content
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);