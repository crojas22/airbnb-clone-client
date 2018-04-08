import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Navigation from "./reusable/Navigation";
import SearchFilter from "./search/SearchFilter";
import SearchResults from "./search/SearchResults";
import SearchMap from "./search/SearchMap";
import { fetchData } from "../action";
import { FETCH_SEARCH_DATA } from "../type";

class SearchPage extends Component {
  componentDidMount() {
    this.props.fetchData(FETCH_SEARCH_DATA, "v1/search/home")
  }
  
  render() {
    return(
      <div className="position-relative">
        <Navigation classes="fixed w-100 bg-white z-100"/>
        <SearchFilter classes="fixed w-100 bg-white z-50"/>
        <SearchResults data={this.props.data}/>
        <div className="position-fixed w-35 right-0 top-145">
          <SearchMap />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);