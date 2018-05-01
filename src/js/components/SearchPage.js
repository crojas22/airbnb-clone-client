import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Navigation from "./reusable/Navigation";
import SearchFilter, {
  ExperienceFilterOptions, HomeFilterOptions,
  RestaurantFilterOptions
} from "./search/SearchFilter";
import SearchResults, {
  GeneralResultsHeader,
  HomeResultsHeader
} from "./search/SearchResults";
import { fetchData, sendAction, setData } from "../action";
import {
  DECREASE_SEARCH_HOME_GUEST_COUNT_ADULTS, DECREASE_SEARCH_HOME_GUEST_COUNT_CHILDREN,
  DECREASE_SEARCH_HOME_GUEST_COUNT_INFANTS,
  FETCH_SEARCH_DATA, INCREASE_SEARCH_HOME_GUEST_COUNT_ADULTS, INCREASE_SEARCH_HOME_GUEST_COUNT_CHILDREN,
  INCREASE_SEARCH_HOME_GUEST_COUNT_INFANTS,
  RESET_SEARCH_DATA, RESET_SEARCH_HOME_GUEST_COUNT,
  SEARCH_PAGE_LOADING_FALSE
} from "../type";
import { Loading } from "./reusable/Loading";
import GoogleMapApi from "./reusable/GoogleMapApi";
import SingleLink, { SingleRestaurantLink } from "./homepage/SingleLink";
import GroupOfLinks from "./homepage/GroupOfLinks";
import { PartialModal } from "./reusable/FullPageModal";
import { GuestsDropdownOptions } from "./individual/QuickReservation";

class SearchPage extends Component {
  state = {
    isModalOn: false
  };
  
  async componentDidMount() {
    await this.props.fetchData(FETCH_SEARCH_DATA, `v1${this.props.location.pathname}`);
    this.props.setData(SEARCH_PAGE_LOADING_FALSE, false);
  }
  
  componentWillUnmount() {
    this.props.sendAction(RESET_SEARCH_DATA);
  }
  
  clickOnOff = target => this.setState(prevState => ({[target]: !prevState[target]}));
  
  clickOff = evt => {
    if (evt.target === document.querySelector("#partialModal")) {
      this.setState({isModalOn: false, guests: false})
    }
  };
  
  render() {
    if (this.props.isLoading) {
      return <Loading />
    }
    const { location, data, pageSettings, sendAction, setData, match } = this.props;
    return(
      <div className="position-relative">
        <Navigation classes="fixed w-100 bg-white z-100"/>
        {
          (location.pathname === "/search/homes" &&
          <React.Fragment>
            <SearchFilter classes="fixed w-100 bg-white z-50"
                          options={<HomeFilterOptions {...this.state} clickOnOff={this.clickOnOff} settings={pageSettings}/>}/>
            <SearchResults data={data}
                           to="home"
                           withMap={true}
                           component={SingleLink}
                           linkClass="col-lg-6 col-xl-4 col-sm-6 my-2"
                           header={<HomeResultsHeader/>}/>
            <PartialModal
              clickOff={this.clickOff}
              InnerComponent={
                <div style={{width: 350, left: 93}} className="position-relative">
                  <GuestsDropdownOptions
                    sendAction={setData}
                    cancelActions={() => sendAction(RESET_SEARCH_HOME_GUEST_COUNT)}
                    applyActions={() => {
                      this.clickOnOff("guests");
                      this.clickOnOff("isModalOn");
                    }}
                    location={match.params.type}
                    classes="border-top rounded"
                    adultsCount={pageSettings.guests.guestCount.adults + "+"}
                    childrenCount={pageSettings.guests.guestCount.children+"+"}
                    infantsCount={pageSettings.guests.guestCount.infants+"+"}
                    actionIncreaseGuestAdult={INCREASE_SEARCH_HOME_GUEST_COUNT_ADULTS}
                    disablePlusAdult={pageSettings.guests.guestCount.adults > 9}
                    actionDecreaseGuestAdult={DECREASE_SEARCH_HOME_GUEST_COUNT_ADULTS}
                    disableMinusAdult={pageSettings.guests.guestCount.adults < 2}
                    actionIncreaseGuestChildren={INCREASE_SEARCH_HOME_GUEST_COUNT_CHILDREN}
                    disablePlusChildren={pageSettings.guests.guestCount.children > 4}
                    actionDecreaseGuestChildren={DECREASE_SEARCH_HOME_GUEST_COUNT_CHILDREN}
                    disableMinusChildren={pageSettings.guests.guestCount.children < 1}
                    actionIncreaseGuestInfants={INCREASE_SEARCH_HOME_GUEST_COUNT_INFANTS}
                    disablePlusInfants={pageSettings.guests.guestCount.infants > 4}
                    actionDecreaseGuestInfants={DECREASE_SEARCH_HOME_GUEST_COUNT_INFANTS}
                    disableMinusInfants={pageSettings.guests.guestCount.infants < 1}
                  />
                </div>
              }
              active={this.state.isModalOn}
            />
            <div className="position-fixed w-35 right-0 top-145">
              <div className="d-none d-lg-block">
                <GoogleMapApi
                  listings={data}
                  zoom={4}
                  height="85vh"
                  multiple={true}
                  latitude={37.090240}
                  longitude={-95.712891}
                />
              </div>
            </div>
          </React.Fragment>)
        }
        {
          (location.pathname === "/search/experiences" &&
            <React.Fragment>
              <SearchFilter classes="fixed w-100 bg-white z-50"
                            options={<ExperienceFilterOptions />}/>
              <SearchResults data={data}
                             to="experience"
                             withMap={true}
                             component={SingleLink}
                             linkClass="col-lg-6 col-xl-4 col-sm-6 my-2"
                             header={<GeneralResultsHeader title="Experiences in the spotlight"/>}/>
              <div className="position-fixed w-35 right-0 top-145">
                <div className="d-none d-lg-block">
                  <GoogleMapApi
                    listings={data}
                    zoom={4}
                    height="85vh"
                    multiple={true}
                    latitude={37.090240}
                    longitude={-95.712891}
                  />
                </div>
              </div>
            </React.Fragment>)
        }
        {
          (location.pathname === "/search/restaurants" &&
            <React.Fragment>
              <SearchFilter
                classes="fixed w-100 bg-white z-50 pl-md-5"
                options={<RestaurantFilterOptions />}
              />
              <div className="px-3 px-sm-4 px-md-5 mx-md-4 mt-6">
                <h3 className="mb-0 pt-4">Restaurants in the spotlight</h3>
                <GroupOfLinks to="restaurant"
                              component={SingleRestaurantLink}
                              homeListing={data.slice(0,8)}/>
              </div>
              <div className="px-3 px-sm-4 px-md-5 mx-md-4 mt-2">
                <h3 >Restaurants around america</h3>
                <GroupOfLinks to="restaurant"
                              component={SingleRestaurantLink}
                              homeListing={data.slice(4)}/>
              </div>
            </React.Fragment>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isLoading: state.searchData.isLoading,
  data: state.searchData.listings,
  pageSettings: state.searchOptionsSettings[props.match.params.type]
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData,
    sendAction,
    setData
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));