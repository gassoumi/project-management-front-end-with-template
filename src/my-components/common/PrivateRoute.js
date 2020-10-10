import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRoute = ({component: Component, auth, ...rest}) => {

  // const from = rest.location;

  return (<Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated) {
          return <Redirect to={{
            pathname: '/login',
            search: props.location.search,
            state: {from: props.location},
            // search: "?sort=name",
            // hash: "#the-hash",
            // state: {from: from}
          }}/>;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
