import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AppLoggedOut from './components/loggedOutComponents/AppLoggedOut.jsx';
import AppLoggedIn from './components/loggedInComponents/AppLoggedIn.jsx';

ReactDOM.render((
	<Router>
		<div>
			<Route exact path="/" component={AppLoggedOut} />
			<Route path="/login" component={AppLoggedOut} />
      <Route path="/signup" component={AppLoggedOut} />
			<Route path="/buypasses" component={AppLoggedIn} />
      <Route path="/sellpasses" component={AppLoggedIn} />
		</div>
	</Router>
), document.getElementById('app'));
