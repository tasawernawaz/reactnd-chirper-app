import { getInitialData } from '../utils/api'
import { receiveTweets } from '../actions/tweets'
import { receiveUsers } from '../actions/users'
import { authUser } from '../actions/authUser'
import { showLoading, hideLoading} from 'react-redux-loading'


const AUTH_USER_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({tweets, users}) => {
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(authUser(AUTH_USER_ID))
            dispatch(hideLoading())
        })

    }
}