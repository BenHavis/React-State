import React from 'react'
import './Component.css'

class Hello extends React.Component {
  render () {
    return (
      <h1 className='center'>Hello {this.props.name}</h1>
    )
  }
}

export default Hello
