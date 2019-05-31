import React from "react";
import api from '../services/api';


class App extends React.Component {

  //Will run as soon as the component renders
  async componentDidMount() {
    const result = await api.call('post', 'auth', {
      email: 'test1@gmail.com',
      password: '123456'
    })

    console.log(result)
  }
  render(){
    return(
      <div>
        <h1>Daniel's Application</h1>
      </div>
    )
  }
}

export default App;
