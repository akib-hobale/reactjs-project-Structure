import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends Component {
  state = {};

  render() {
    let data = this.props.getuserData;
    console.log(data);
    return (
      <div>
        <h1>Welcome Test</h1>

        {data && data.map(user => <li key={user.id}>{user.name}</li>)}
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    getuserData: state.userdata.users
  };
};

export default connect(mapStateToprops, null)(Test);
