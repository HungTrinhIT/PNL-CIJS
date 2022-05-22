import React, { Component } from "react";

class DemoLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    console.log("Constructor...");
  }

  componentDidMount() {
    console.log("Component did mount");

    // Call API get todo list from server
    const todos = [
      {
        id: 1,
        title: "Learn ReactJS",
        isCompleted: true,
      },
      {
        id: 2,
        title: "Learn violent",
        isCompleted: true,
      },
      {
        id: 3,
        title: "Shopping",
        isCompleted: false,
      },
    ];

    this.setState({
      todos: todos,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log({
    //   prevProps,
    //   prevState,
    // });
    console.log("Component did update");
    if (this.state.todos.length !== prevState.todos.length) {
      this.setState({
        todos: [],
      });
    }
  }

  render() {
    console.log("Render...");
    const todos = this.state.todos;
    return (
      <div>
        {todos.length === 0 ? (
          <h2>Please add todo</h2>
        ) : (
          todos.map((todo, index) => {
            return <h2 key={index}>{todo.title}</h2>;
          })
        )}
      </div>
    );
  }
}

export default DemoLifecycle;
