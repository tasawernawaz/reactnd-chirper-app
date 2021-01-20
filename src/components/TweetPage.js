import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

class TweetPage extends React.Component {
    render() {
        const { id, replies } = this.props
        return (
            <div>
                <Tweet tweetId={id}/>
                <NewTweet id={id}/>
                {replies.length > 0 && (
                <div>
                    <h3 className="center">Replies</h3>
                    <ul>
                        {replies.map(replyId =>
                        <li key={replyId}>
                            <Tweet tweetId={replyId} />
                        </li>
                        )}
                    </ul>
                </div>
                )}
            </div>
        )
    }
}

function mapStateToProps ({users, tweets, authUser}, props) {
    const id = props.match.params.id
    return {
        id,
        replies: !tweets[id]
        ? []
        : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
    }

}
export default connect(mapStateToProps)(TweetPage)