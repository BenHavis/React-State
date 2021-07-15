import React from 'react'
import './App.css'
// Import components
// import Nav from './components/Nav'
// import Tweets from './components/Tweets'
import Message from './components/Message'
import Counter from './components/Counter'
import Hello from './components/Hello'

function App () {
  const name = 'react'
  return (
    <div className='App'>
      <Hello name={name} />
      <Message />
      <Counter />
    </div>
  )
}

export default App
