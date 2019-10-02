import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import LoadingSpinner from './LoadingSpinner'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      errMsg: ''
    }
  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( {lat: position.coords.latitude} ),
      err => this.setState( {errMsg: err.message} )
    )
  }

  renderContent() {
    if(this.state.errMsg && !this.state.lat) {
      return <div>Error: { this.state.errMsg }</div>
    } else if(this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={ this.state.lat } />
    } else {
      return <LoadingSpinner message="Awaiting permission for user's location."/>
    }
  }

  render() {
     <div className="content">
       {this.renderContent()}
     </div> 
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)