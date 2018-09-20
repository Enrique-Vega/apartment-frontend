import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService'

class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleChange = (e) => {
    let { user } = this.state

        // copy event target name and value (target will be a form field)
        let fieldName = e.target.name
        let inputValue = e.target.value

        console.log(inputValue, fieldName);

        // update form object with new value from user
        user[fieldName] = inputValue

    this.setState({user})
  }

  handleFormSubmit = (e) => {
    let { email, password } = this.state
    e.preventDefault()
    console.log(e);
    this.Auth.login(email, password)
    .then(res =>{
      console.log(res);
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
