import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import { Router, browserHistory, Route, Redirect, IndexRedirect} from 'react-router';
import AllAthletes from '../app/browser/allAthletes'

const onEnterAthlete = (nextRouterState) => {
  let id = nextRouterState.params.id;
  store.dispatch(getAthleteById(id))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AllAthletes}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
