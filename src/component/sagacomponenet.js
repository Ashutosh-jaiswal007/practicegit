import React from "react";
import { connect } from "react-redux";
import { getData } from "../redux/sage/useraction.js";

const Sagas = (props) => {
  return (
    <>
      <h2>user records</h2>
      <button onClick={props.getData}> Show User</button>
      {props.istoggle && <UserData userdata={props.userdata} />}
    </>
  );
};

const UserData = (userdata) => {
  console.log(userdata.userdata, "userdata in user data");
  return (
    <>
      <h2>hello user</h2>
      {userdata.userdata.map((user) => (
        <ul>
          <List userobj={user} />
        </ul>
      ))}
    </>
  );
};

const List = (userobj) => {
  console.log(userobj);
  return (
    <>
      <li>{userobj.userobj.name}</li>
      <li>{userobj.userobj.username}</li>
      <li>{userobj.userobj.email}</li>
      <li>{userobj.userobj.website}</li>
      <li>{userobj.userobj.phone}</li>
    </>
  );
};

const mapStatetoprops = (state) => {
  return {
    userdata: state.result,
    istoggle: state.login,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStatetoprops, mapdispatchtoprops)(Sagas);
