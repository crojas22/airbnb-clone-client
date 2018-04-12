import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import Navigation from "./reusable/Navigation";
import SearchFilter, { HomeFilterOptions } from "./search/SearchFilter";
import SearchResults from "./search/SearchResults";
import SearchMap from "./search/SearchMap";
import { fetchData } from "../action";
import { FETCH_SEARCH_DATA } from "../type";
import { Loading } from "./reusable/Loading";

class SearchPage extends Component {
  state = {
    loading: true
  };
  
  async componentDidMount() {
    await this.props.fetchData(FETCH_SEARCH_DATA, `v1${this.props.location.pathname}`);
    this.setState({loading: false});
  }
  
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return(
      <div className="position-relative">
        <Navigation classes="fixed w-100 bg-white z-100"/>
        <SearchFilter classes="fixed w-100 bg-white z-50"
                      options={
                        this.props.location.pathname === "/search/homes" ? <HomeFilterOptions /> : null
                      }/>
        <SearchResults data={this.props.data}/>
        <div className="position-fixed w-35 right-0 top-145">
          <SearchMap data={this.props.data}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.searchData
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));