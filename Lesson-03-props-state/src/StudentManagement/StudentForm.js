import React, { Component } from "react";

export default class StudentForm extends Component {
  state = {
    studentId: "",
    fullname: "",
    email: "",
    phone: "",
    math: "",
    physical: "",
    chemistry: "",
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const student = this.state;
    this.props.onAddStudent(student);
    this.setState({
      studentId: "",
      fullname: "",
      email: "",
      phone: "",
      math: "",
      physical: "",
      chemistry: "",
    });
  };

  render() {
    const { studentId, fullname, email, phone, math, chemistry, physical } =
      this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-item">
                <label htmlFor="studentId" className="form-label">
                  Ma sinh vien
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentId"
                  name="studentId"
                  value={studentId}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-item">
                <label htmlFor="fullname" className="form-label">
                  Ho ten
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-item">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.onChangeHandler}
                  value={email}
                />
              </div>
              <div className="form-item">
                <label htmlFor="phone" className="form-label">
                  So dien thoai
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-item">
                <label htmlFor="math" className="form-label">
                  Diem toan
                </label>
                <input
                  className="form-control"
                  id="math"
                  name="math"
                  onChange={this.onChangeHandler}
                  value={math}
                  type="number"
                />
              </div>
              <div className="form-item">
                <label htmlFor="physical" className="form-label">
                  Diem ly
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="physical"
                  name="physical"
                  onChange={this.onChangeHandler}
                  value={physical}
                />
              </div>
              <div className="form-item">
                <label htmlFor="chemistry" className="form-label">
                  Diem hoa
                </label>
                <input
                  className="form-control"
                  id="chemistry"
                  onChange={this.onChangeHandler}
                  name="chemistry"
                  value={chemistry}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center  my-2">
            <button type="submit" className="btn btn-primary">
              Them hoc sinh
            </button>
          </div>
        </form>
      </div>
    );
  }
}
