import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

export default class StudentManagement extends Component {
  state = {
    students: [],
  };

  onAddStudent = (student) => {
    console.log("student-", student);
    // Cach 1
    // let newStudents = [...this.state.students];
    // newStudents.push(student);
    // this.setState({
    //   students: newStudents,
    // });

    // Cach 2
    this.setState({
      students: [...this.state.students, student],
    });
  };
  render() {
    return (
      <div className="container">
        <p className="display-3 text-center mb-5">Bai tap ve form</p>
        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}
