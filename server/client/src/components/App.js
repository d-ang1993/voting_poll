import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      authenticated: false,
      username: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    console.log(localStorage)
  }

  authenticate() {

  }

  async handleLogin(e) {
    e.preventDefault()
    const form = e.target

    let { email, password } = form

    email = email.value;
    password = password.value;

    const host = 'http://localhost:5000/api/auth'
    const { data } = await axios.post(host, { email, password });

    console.log(data)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handleSubmit(e){
  //   e.preventDefault()
  //   const form = e.target
  //
  //   const { email, password } = form
  //
  //
  // }

  render(){
    const {email, password} = this.state
    return(
      <div>
        <form onSubmit={this.handleLogin}>
          <label for="email">email</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label for="password">password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
