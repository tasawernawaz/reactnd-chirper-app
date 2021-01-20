import { showLoading, hideLoading } from 'react-redux-loading'
import { saveLikeToggle, saveTweet } from '../utils/api'


export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const LIKE_TWEET = "LIKE_TWEET"
export const ADD_TWEET = "ADD_TWEET"


export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}


export function likeTweet(tweetId, hasLiked, authUser) {
    return {
        type: LIKE_TWEET,
        tweetId: tweetId,
        authUser: authUser,
        hasLiked: hasLiked
    }
}


export function handleLikeTweet(id, hasLiked, authUser) {
    return (dispatch) => {
        dispatch(likeTweet(id, hasLiked, authUser))
        return saveLikeToggle({id, hasLiked, authUser})
        .catch((e) => {
            console.warn('Error in handleToggleTweet: ', e)
            dispatch(likeTweet(id, hasLiked, authUser))
            alert('There was an error liking the tweet. Try again.')
        })
    }
}


export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { authUser } = getState()
        dispatch(showLoading())

        return saveTweet({
            text,
            replyingTo,
            author: authUser
        })
        .then((tweet) => {
            dispatch(addTweet(tweet))
        })
        .then(dispatch(hideLoading()))
    }
}