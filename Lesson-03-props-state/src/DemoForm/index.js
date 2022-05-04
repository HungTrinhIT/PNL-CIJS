import React, { Component } from 'react'

class DemoForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    onChangeHandler = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();
        //logic
        alert(`Hey ${this.state.username}, sign up successfully`)
        this.setState({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    render() {


        const { email, username, confirmPassword, password } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='form-control'>
                        <label htmlFor='username'>Username</label>
                        <input type="text" name="username" id="username" onChange={this.onChangeHandler} value={this.state.username} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" id="email" onChange={this.onChangeHandler} value={this.state.email} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="password" onChange={this.onChangeHandler} value={this.state.password} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='confirmPassword'>Confirm password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onChange={this.onChangeHandler} value={this.state.confirmPassword} />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        )
    }
}

export default DemoForm


// onUsernameChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     console.log({
    //         name, value
    //     })
    // }

    // onEmailChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     console.log({
    //         name, value
    //     })
    // }