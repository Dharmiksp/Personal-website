import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './container/About';
import Programming from './container/Programming';
import Academics from './container/Academics';
import Experience from './container/Experience';



class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" component={ About } exact />
          <Route path="/programming-journey" component={ Programming } exact/> 
          <Route path="/academics" component={ Academics } exact/> 
          <Route path="/sh-experience" component={ Experience } exact/> 
        </Switch>
      </Router>
      
    )
  }
}

export default App;