import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null
    }
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( {lat: position.coords.latitude} ),
      (err) => console.log(err)
    )
  }
  
  render() {
    return(
      <h1>Latitude: { this.state.lat }</h1>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)