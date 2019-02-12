import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: null,
//       err: ''
//     }
//  }
  //same as defining state within a contructor (bable compiles to js)
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    console.log('my component was rendred to the screen');
    //call api here 
    window.navigator.geolocation.getCurrentPosition(
      position =>  {
        console.log(' position', position)
        this.setState({lat: position.coords.latitude}) 
      },
      err => this.setState({err: err.message})
    )
  }

  componentDidUpdate() {
    console.log('my compoent was updated and rerendered')
  }

  render() {
    if (this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err}</div>;
    }
    if(!this.state.err && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <Loader/>;
  }
}

// return (
//   <div className="App">
//     Latitude: {this.state.lat}
//     {this.state.err.length > 0 && 
//       <div className="ui segment">Error: {this.state.err}</div>
//     }
//   </div>
// )
export default App;
