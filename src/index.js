import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      errMsg: ''
    }
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( {lat: position.coords.latitude} ),
      err => this.setState( {errMsg: err.message} )
    )
  }
  
  render() {
    return(
      <div>
        <h1>Latitude: { this.state.lat }</h1>
        <aside>{ this.state.errMsg }</aside>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)