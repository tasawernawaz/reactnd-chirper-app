import { authUser } from '../actions/authUser'
import { LIKE_TWEET, RECEIVE_TWEETS } from '../actions/tweets'

export default function users (state={}, action) {
    // TODO: check the spread operator
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case LIKE_TWEET:
            return {
                ...state,
                [action.tweetId]: {
                    ...state[action.tweetId],
                    likes: action.hasLiked === true ?
                    state[action.tweetId].likes.filter(uid => uid !== action.authUser)
                    :state[action.tweetId].likes.concat(action.authUser)
                }
            }
        default:
            return state
    }
}