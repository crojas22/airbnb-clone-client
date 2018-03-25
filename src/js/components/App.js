import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage";
import IndividualListing from "./IndividualListing";
import IndividualListingExperience from "./IndividualListingExperience";

const App = () => {
  return(
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/listing/home/:id' component={IndividualListing}/>
      <Route path='/listing/experience/:id' component={IndividualListingExperience}/>
    </Switch>
  )
};

export default App;