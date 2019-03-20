/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import LoginContainer from './Login';
import Profile from '../components/Profile';

const ProfileContainer = (props) => {
  console.log("props", props);
  if(props.success)
  return (
    <Profile
      user={props.user}
    />
  );
  else 
    return (<LoginContainer />);
};
const mapStateToProps = store => ({
  success: store.login.success,
  user: store.login.user,
});


export default connect(
  mapStateToProps,
)(ProfileContainer);