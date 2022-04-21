import { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title, hobbies } = this.props;
    return (
      <div className="card-container">
        <div className="card-img"></div>
        <h1 className="card-name">{name}</h1>
        <div className="card-information">
          <p className="card-title">
            <strong>Title: {title}</strong>
          </p>
          <p>
            <strong>Hobbies:</strong> {hobbies.join(", ")}
          </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
