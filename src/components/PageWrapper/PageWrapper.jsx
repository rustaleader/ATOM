import React, { Component } from 'react'
import './PageWrapper.css'
import PropTypes from 'prop-types'
export default class PageWrapper extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='PageWrapper'>
        {children}
      </div>
    )
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

}