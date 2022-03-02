//import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">NewsPanda</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Technology</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default navbar