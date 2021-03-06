import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom'


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
   this.getSmurfs();
  }


  getSmurfs = () => {
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => this.setState({smurfs: res.data}))
  .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink to="/" exact> Home </NavLink>
          <NavLink to="/addSmurf" >Add a Smurf</NavLink>
          <NavLink to="/smurfs" >Smurfs</NavLink>
        </div>
        
        <Route path="/addSmurf" render={props => <SmurfForm getSmurfs={this.getSmurfs} />}/>
        <Route path="/smurfs" render={props => (<Smurfs smurfs={this.state.smurfs} />)}/>
      </div>
    );
  }
}

export default App;
