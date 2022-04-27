import { Component } from "react";
import "./App.css";
import CarColor from "./components/CarColor";
import Count from "./components/Count";
import UserCard from "./components/UserCard";
import PhoneStore from "./PhoneStore/PhoneStore";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      users: [
        {
          name: "Cristian Ro",
          title: "Football Player",
          hobbies: ["Music", "Coding", "Swimming"],
        },
        {
          name: "Eric Trinh",
          title: "Data Engineer",
          hobbies: ["Coding", "Sleeping"],
        },
        {
          name: "Son Tung MTP",
          title: "Singer",
          hobbies: ["Music", "Swimming"],
        },
        {
          name: "Son Tung MTP",
          title: "Singer",
          hobbies: ["Music", "Swimming"],
        },
        {
          name: "Son Tung MTP fake 100",
          title: "Singer",
          hobbies: ["Music", "Swimming"],
        },
        {
          name: "Son Tung Fake 1",
          title: "Singer",
          hobbies: ["Music", "Swimming"],
        },
        {
          name: "Son Tung fake 2",
          title: "Singer",
          hobbies: ["Music", "Swimming"],
        },
      ],
    };
  }

  onLogin = () => {
    // this.state.isAuthenticated = true;

    //right
    this.setState({
      isAuthenticated: true,
    });
  };

  onLogout = () => {
    this.setState({
      isAuthenticated: false,
    });
  };

  //method render
  render() {
    console.log("render");
    const userCardsContent = this.state.users.map((user, index) => {
      return (
        <UserCard
          name={user.name}
          title={user.title}
          hobbies={user.hobbies}
          key={index}
        />
      );
    });

    // if (this.state.isAuthenticated === true) {
    //   return (
    //     <div className="app">
    //       <button onClick={this.onLogout}>Log out</button>
    //       {userCardsContent}
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Hello, please log in first</h1>
    //       <button onClick={this.onLogin}>Log in</button>
    //     </div>
    //   );
    // }
    return (
      <div>
        {/* <Count />;  */}
        {/* <CarColor /> */}
        <PhoneStore />
      </div>
    );
  }
}

export default App;

// Normal CSS
// module css
// styled-components
// library

//Method onLogin - cach 1
// onLogin() {
//   console.log("this", this);
//   console.log("hello");
// }

// Cach 1
// this.onLogin = this.onLogin.bind(this);
