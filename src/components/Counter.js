import React from 'react'
import './Component.css'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      testCount: ''
    }
    this.handleCount = this.handleCount.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  /*   handleCount () {
    this.setState({
      count: this.state.count + 1
    }
    , () => { console.log(`Callback value: ${this.state.count}`) }) // Callback function that runs after state is set
  } */
  handleCount () {
    this.setState(prevState => ({
      count: prevState.count + 1 * this.state.testCount
    }))
  }

  handleChange (e) {
    this.setState({ testCount: e.target.value })
  }

  render () {
    return (
      <div className='center'>
        <h1>Counter: {this.state.count}</h1>
        <input type='text' value={this.state.testCount} onChange={this.handleChange} />
        <button onClick={this.handleCount}>Add to counter</button>
      </div>
    )
  }
}

export default Counter
