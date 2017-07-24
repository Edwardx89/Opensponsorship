import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import { Router, browserHistory, Route, Redirect, IndexRedirect} from 'react-router';
import Athletes from '../app/browser/athletes'
import AllAthletes from '../app/browser/allAthletes'
import SingleAthlete from '../app/browser/singleAthlete'
import EditAthlete from '../app/browser/editAthlete'
import {getAthleteById} from './reducers/reducer';

const onEnterAthlete = (nextRouterState) => {
  let id = nextRouterState.params.id;
  store.dispatch(getAthleteById(id))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AllAthletes}/>
      <Route path="/add" component={Athletes}/>
      <Route path="/athlete/:id" component={SingleAthlete} onEnter={onEnterAthlete}/>
      <Route path="/athlete/:id/edit" component={EditAthlete} onEnter={onEnterAthlete}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
