import React, { Component } from 'react';
import '../css/Login.css';
import AuthService from '../services/AuthService'

class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      loggedInSuccess: false,
      errors:"",
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
    e.preventDefault()
    this.Auth.login(this.state)
    .then(json =>{
      console.log("handling any errors");
      if(json.errors) {
        this.setState({errors: json.errors})
      }
      return json
    })
    if (this.Auth.loggedIn()) this.setState({
      loggedInSuccess: true
  })
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
