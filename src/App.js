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
        {/* <News pageSize={5} country="in" category="sports"/> */
        <Switch>
          <Route exact path="/business"><News Key="Business"  pageSize={8} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News Key="Entertainment" pageSize={8} country="in" category="entertainment"/></Route>
          <Route exact path="/science"><News Key="Science" pageSize={8} country="in" category="science"/></Route>
          <Route exact path="/sports"><News Key="Sports" pageSize={8} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News Key="Technology" pageSize={8} country="in" category="technology"/></Route>
          <Route exact path="/general"><News Key="General" pageSize={8} country="in" category="general"/></Route>
          <Route exact path="/health"><News Key="Health" pageSize={8} country="in" category="health"/></Route>
          <Route exact path="/home"><News Key="Home" pageSize={8} country="in" category="general"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}