/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import login from '../action/login';
import Login from '../components/Login';

const LoginContainer = (props) => {
  console.log(props);
  return (
    <Login
    // eslint-disable-next-line react/destructuring-assignment
      login={props.login}
      // eslint-disable-next-line react/destructuring-assignment
      success={props.success}
    />
  );
};
const mapStateToProps = store => ({
  success: store.login.success,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);