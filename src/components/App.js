import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import { BrowserRouter, Route} from 'react-router-dom'
import Nav from './Nav'


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
      <React.Fragment>
        <LoadingBar />
        <div className="container">
        <BrowserRouter>
          <Nav />
          {this.props.loading === true ?
          null : <div>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/new"  component={NewTweet} />
            <Route path="/tweet/:id" component={TweetPage}/>
          </div>
          }
        </BrowserRouter>

      </div>
      </React.Fragment>

    )
  }
}

function mapStateToProps({authUser}) {
  return {
    loading: authUser === null
  }
}
export default connect(mapStateToProps)(App)