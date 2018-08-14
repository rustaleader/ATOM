import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import logo from './img/logo.png'
import './App.css'
import Home from 'containers/Home'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Home/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App)
