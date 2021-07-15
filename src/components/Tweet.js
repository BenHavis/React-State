import React from 'react'

class Tweet extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.me}</h1>
        <h2>{this.props.tweet}</h2>
      </div>
    )
  }
}

export default Tweet
