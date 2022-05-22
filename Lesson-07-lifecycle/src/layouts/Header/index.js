import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Search</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
