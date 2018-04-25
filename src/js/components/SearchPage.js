import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Navigation from "./reusable/Navigation";
import SearchFilter, { ExperienceFilterOptions, HomeFilterOptions } from "./search/SearchFilter";
import SearchResults, { ExperienceResultsHeader, HomeResultsHeader } from "./search/SearchResults";
import { fetchData, sendAction, setData } from "../action";
import { FETCH_SEARCH_DATA, RESET_SEARCH_DATA, SEARCH_PAGE_LOADING_FALSE } from "../type";
import { Loading } from "./reusable/Loading";
import GoogleMapApi from "./reusable/GoogleMapApi";

class SearchPage extends Component {
  
  async componentDidMount() {
    await this.props.fetchData(FETCH_SEARCH_DATA, `v1${this.props.location.pathname}`);
    this.props.setData(SEARCH_PAGE_LOADING_FALSE, false);
  }
  
  componentWillUnmount() {
    this.props.sendAction(RESET_SEARCH_DATA);
  }
  
  render() {
    if (this.props.isLoading) {
      return <Loading />
    }
    return(
      <div className="position-relative">
        <Navigation classes="fixed w-100 bg-white z-100"/>
        {
          this.props.location.pathname === "/search/homes" ?
            <React.Fragment>
              <SearchFilter classes="fixed w-100 bg-white z-50"
                            options={<HomeFilterOptions />}/>
              <SearchResults data={this.props.data}
                             to="home"
                             header={<HomeResultsHeader />}/>
              <div className="position-fixed w-35 right-0 top-145">
                <div className="d-none d-lg-block">
                  <GoogleMapApi
                    listings={this.props.data}
                    zoom={4}
                    height="85vh"
                    multiple={true}
                    latitude={37.090240}
                    longitude={-95.712891}
                  />
                </div>
              </div>
            </React.Fragment> :
            this.props.location.pathname === "/search/experiences" ?
              <React.Fragment>
                <SearchFilter classes="fixed w-100 bg-white z-50"
                              options={<ExperienceFilterOptions />}/>
                <SearchResults data={this.props.data}
                               to="experience"
                               header={<ExperienceResultsHeader />}/>
                <div className="position-fixed w-35 right-0 top-145">
                  <div className="d-none d-lg-block">
                    <GoogleMapApi
                      listings={this.props.data}
                      zoom={4}
                      height="83vh"
                      multiple={true}
                      latitude={37.090240}
                      longitude={-95.712891}
                    />
                  </div>
                </div>
                </React.Fragment> : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.searchData.listings,
  isLoading: state.searchData.isLoading
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData,
    sendAction,
    setData
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));