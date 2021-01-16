import { getInitialData } from '../utils/api'
import { receiveTweets } from '../actions/tweets'
import { receiveUsers } from '../actions/users'
import { authUser } from '../actions/authUser'


const AUTH_USER_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({tweets, users}) => {
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(authUser(AUTH_USER_ID))
        })

    }
}