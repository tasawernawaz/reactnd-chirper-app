import React from 'react'
import { connect } from 'react-redux'


class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweetIds.map(id =>
                        <li key={id}>Tweet Id: {id}</li>
                    )}
                </ul>

            </div>
        )
    }
}

function mapStateToProps( {tweets} ){
    return {
        tweetIds: Object.keys(tweets)
        .sort((a, b) => a.timestamp - b.timestamp)
    }
  }


export default connect(mapStateToProps)(Dashboard)