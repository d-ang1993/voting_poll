import React from "react";
import { connect } from "react-redux";
import decode from 'jwt-decode'
import { authUser, logout } from "../store/actions";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      authenticated: "false"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  const token = localStorage.getItem('jwtToken');
  console.log(localStorage);
  if (token) {
    this.setState({authenticated: true})
    const { user } = decode(token)
    console.log(user)
    localStorage.setItem('user', user)
  }

  console.log(localStorage.getItem('user'))

  // console.log(this.state.authenticated)

  }


  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    const { email, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();

    console.log("hello")

    // this.props.authUser(authType, { email, password })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
    );
  }
}

export default Auth
