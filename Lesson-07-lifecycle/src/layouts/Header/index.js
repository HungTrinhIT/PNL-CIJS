import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="nav-brand">
            <span>Github Finders</span>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
