import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

export const UserContainer = () => {
  return <div></div>;
};

const mapStatetoProps = (state) => {
  return {
    userstate: state.user,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserContainer);
