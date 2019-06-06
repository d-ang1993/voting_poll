import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const onSubmit = async e => {
    e.preventDefault()
    if(password !== password2) {
      console.log("password do not match")
    } else {
      console.log("SUCCESS")

      // const newUser = {
      //   name,
      //   email,
      //   password,
      // }
      // try {
      //   const config ={
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   }
      //   const body = JSON.stringify(newUser);
      //   console.log("body")
      //   const res = await axios.post('/api/users/register', body, config);
      //   console.log(res.data)
      // } catch (err) {
      //   console.error(err.response.data)
      // }
    }
  }
  return(
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into your account</p>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" value={email} onChange={e => onChange(e)} name="email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an Account? <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
  )
}

export default Login
