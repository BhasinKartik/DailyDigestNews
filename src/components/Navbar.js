import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }
 load=()=>{
  setTimeout(()=>{window.location.reload()},220)
}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DAILY DIGEST</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/About" onClick={this.load}>About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business" onClick={this.load}>Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={this.load}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports"onClick={this.load}> sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" onClick={this.load}>science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general" onClick={this.load}>general</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" onClick={this.load}>health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" onClick={this.load}>technology</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
