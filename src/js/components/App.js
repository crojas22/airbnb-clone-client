import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from "./reusable/Loading";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "./Homepage" */ './Homepage'),
  loading: Loading,
  modules: ['./Homepage']
});

const IndividualListing = Loadable({
  loader: () => import(/* webpackChunkName: "./IndividualListing" */ './IndividualListing'),
  loading: Loading,
  modules: ['./IndividualListing']
});

const IndividualListingExperience = Loadable({
  loader: () => import(/* webpackChunkName: "./IndividualListingExperience" */ './IndividualListingExperience'),
  loading: Loading,
  modules: ['./IndividualListingExperience']
});

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