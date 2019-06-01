import React from "react";
import api from '../services/api';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  //Will run as soon as the component renders
  async componentDidMount() {
    const result = await api.call('post', 'auth', {
      email: 'test1@gmail.com',
      password: '123456'
    })

    const allResult = await api.call('get', 'polls/all')
    this.setState({
      yup: allResult
    })
    console.log(allResult)
    console.log(result)
  }

  render(){
    const { yup } = this.state



    return(
      <div>
        <h1>Vote! For something :D</h1>
        <div>
        </div>
      </div>
    )
  }
}

export default App;
