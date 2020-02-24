import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    const userName = localStorage.getItem("userName");
    return (
      <>
        <h2>Welcome {userName}</h2>
      </>
    );
  }
}

export default Dashboard;
