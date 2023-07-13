import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (

      <div>
        <Router>

        <Navbar/>
        {/* <News pageSize={5} country="in" category="science"/> */}
        <Switch>
          <Route exact path="/business"><News Key="business"  pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News Key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/science"><News Key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News Key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News Key="technology" pageSize={5} country="in" category="technology"/></Route>
          <Route exact path="/general"><News Key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/health"><News Key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/about"><News Key="about" pageSize={5} country="in" category="about"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}