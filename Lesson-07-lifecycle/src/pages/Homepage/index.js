import React, { Component } from "react";
import UserCard from "../../components/UserCard";

export default class Homepage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    //   Call API to get list users
    fetch("https://api.github.com/users?per_page=15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          users: data,
        });
      });
  }
  render() {
    return (
      <div className="row">
        {this.state.users.map((user, index) => {
          return <UserCard user={user} key={index} />;
        })}
      </div>
    );
  }
}
