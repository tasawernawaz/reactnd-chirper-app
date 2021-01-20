import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const match = {
      params: {
        id: "5c9qojr2d1738zlx09afby"
      }
    }

    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ?
        null :
        <TweetPage match={match} />
        }
      </div>
    )
  }
}

function mapStateToProps({authUser}) {
  return {
    loading: authUser === null
  }
}
export default connect(mapStateToProps)(App)