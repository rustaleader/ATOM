import React, { Component, Fragment } from 'react'
import logo from 'containers/App/img/logo.png'

export default class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">ATOM cafe</h1>
      </header>
    )
  }
}