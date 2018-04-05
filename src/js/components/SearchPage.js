import React from 'react';
import Navigation from "./reusable/Navigation";
import SearchFilter from "./search/SearchFilter";
import SearchResults from "./search/SearchResults";
import SearchMap from "./search/SearchMap";

const SearchPage = () => {
  return(
    <div className="position-relative">
      <Navigation classes="fixed w-100 bg-white z-100"/>
      <SearchFilter classes="fixed w-100 bg-white z-50"/>
      <SearchResults />
      <div className="position-fixed w-35 right-0 top-145">
        <SearchMap />
      </div>
    </div>
  )
};

export default SearchPage;