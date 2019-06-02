import React from "react";
import { connect } from "react-redux";

import { authUser, logout } from "../store/actions";
class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.props.authUser(authType, { email, password })
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

export default connect(
  () => ({}),
  { authUser, logout }
)(Auth);
