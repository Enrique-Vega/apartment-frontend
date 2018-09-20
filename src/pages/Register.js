import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import { Redirect } from 'react-router-dom'
import '../css/Register.css'

class Register extends Component {
  constructor(props) {
		super(props)

		this.Auth = new AuthService()
		this.state = {
			registerSuccess: false,
			errors: "",
			form: {
				user: {
					first_name: "",
					last_name: "",
					email: "",
					password: ""
				}
			}
		}
	}

	render() {
		let { first_name, last_name, email, password } = this.state.form.user
		return (
			<main>
        <div className="center">
          <div className="card">
            <h1>Register</h1>
            <form onSubmit={this.handleFormSubmit}>
              <input
                className="form-item"
                placeholder="Firstname"
                name="first_name"
                type="text"
                onChange={this.handleChange}
                value={first_name}
              />
              <input
                className="form-item"
                placeholder="Lastname"
                name="last_name"
                type="text"
                onChange={this.handleChange}
                value={last_name}
              />
              <input
                className="form-item"
                placeholder="email goes here..."
                name="email"
                type="text"
                onChange={this.handleChange}
                value={email}
              />
              <input
                className="form-item"
                placeholder="Password goes here..."
                name="password"
                type="password"
                onChange={this.handleChange}
                value={password}
              />
              <input
                className="form-submit"
                value="SUBMIT"
                type="submit"
              />
            </form>
          </div>
        </div>
				{this.Auth.loggedIn() && <Redirect to="/"/>}
			</main>
		)
	}

  handleChange = (e) => {
    let { user } = this.state.form

        // copy event target name and value (target will be a form field)
        let fieldName = e.target.name
        let inputValue = e.target.value

        // update form object with new value from user
        user[fieldName] = inputValue

    this.setState({user})
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
      this.Auth.register(this.state.form)
      .then(json =>{
        console.log("handling any errors");
        if(json.errors) {
          this.setState({errors: json.errors})
        }
        return json
      })
      if (this.Auth.loggedIn()) this.setState({
        registerInSuccess: true
    })
  }
}
export default Register;
