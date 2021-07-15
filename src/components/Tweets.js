import React from 'react'

import Tweet from './Tweet'

class Tweets extends React.Component {
  render () {
    const tweets = [{ name: 'developedbyben', tweet: 'learning react' }, {name: 'sepand', tweet: 'i need a new job'}]
    return (
      <section>
        {tweets.map(tweet => <Tweet me={tweet.name} tweet={tweet.tweet} />)}
      </section>

    )
  }
}

export default Tweets
