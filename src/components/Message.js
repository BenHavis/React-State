import React from 'react'
import './Component.css'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Welcome Visitor',
      userName: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ message: 'Thank you for subscribing ' + this.state.userName })
    this.setState({ userName: '' })
  }

  handleChange (e) {
    this.setState({ userName: e.target.value })
  }

  render () {
    return (
      <div className='center'>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleClick}>
          <label>Enter your name: </label>
          <input type='text' value={this.state.userName} onChange={this.handleChange} />
          <button>Subscribe</button>
        </form>
      </div>
    )
  }
}

export default Message
