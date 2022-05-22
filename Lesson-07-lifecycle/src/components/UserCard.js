import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    const { user } = this.props;
    const { login, avatar_url } = user;
    return (
      <div className="col-4 user-card">
        <div className="user-avatar">
          <img src={avatar_url} />
        </div>
        <div className="user-info">
          <h5>{login}</h5>
          <button className="btn btn-secondary">More</button>
        </div>
      </div>
    );
  }
}
