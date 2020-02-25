import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../Store/actions/useraction";
class User extends Component {
  state = {};

  componentDidMount() {
    this.props.getUserData();
  }

  handle = () => {
    this.props.history.push("/Test");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handle()}>Tets</button>
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    userSate: state.userdata.users
  };
};

const mapDispathchtoProps = dispatch => {
  return {
    getUserData: () => dispatch(getUser())
  };
};

export default connect(mapstateToProps, mapDispathchtoProps)(User);
