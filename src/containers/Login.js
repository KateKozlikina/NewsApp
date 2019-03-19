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
      errorMsg={props.errorMsg}
    />
  );
};
const mapStateToProps = store => ({
  errorMsg: store.login.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
