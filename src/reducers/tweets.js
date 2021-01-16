import { RECEIVE_TWEETS } from '../actions/tweets'

export default function users (state={}, action) {
    // TODO: check the spread operator
    switch(action.type) {
        case RECEIVE_TWEETS:
            retrun {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}