import React, { Component } from "react";

export default class StudentList extends Component {
  render() {
    const { students } = this.props;
    const tbodyContent = students.map((student, index) => {
      const { fullname, studentId, email, phone, math, physical, chemistry } =
        student;
      //   const gpa = (+math + +physical + +chemistry) / 3;
      const gpa =
        (parseFloat(math) + parseFloat(physical) + parseFloat(chemistry)) / 3;

      return (
        <tr key={index}>
          <th scope="row">{studentId}</th>
          <td>{fullname}</td>
          <td>{phone}</td>
          <td>{gpa.toFixed(1)}</td>
          <td>{email}</td>
        </tr>
      );
    });

    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ma SV</th>
              <th scope="col">Ho ten</th>
              <th scope="col">SDT</th>
              <th scope="col">GPA</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{tbodyContent}</tbody>
        </table>
      </div>
    );
  }
}
