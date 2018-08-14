import React, { Component, Fragment } from 'react'
import PageWrapper from 'components/PageWrapper/PageWrapper'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

export default class Home extends Component {
  render () {
    return (
      <PageWrapper>
        <Header/>
        <h1>ATOM cafe</h1>
        <menu></menu>
        <Footer/>
      </PageWrapper>
    )
  }
}