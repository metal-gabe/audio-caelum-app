import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
   return {
      loggedIn: Boolean(state.session.id),
   };
};

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => {
   return (
      <Route
         exact={exact}
         path={path}
         render={props => (!loggedIn ? <Component {...props} /> : <Redirect to="/discover" />)}
      />
   );
};

// renders component if logged in, otherwise redirects to the root url
const Protected = ({ component: Component, path, loggedIn, exact }) => {
   return (
      <Route
         exact={exact}
         path={path}
         render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
      />
   );
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
