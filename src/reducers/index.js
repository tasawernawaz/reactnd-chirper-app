import { combineReducers } from 'redux'
import users from '../reducers/users'
import tweets from '../reducers/tweets'
import authUser from '../reducers/authUser'


export default combineReducers({
    authUser,
    tweets,
    users
})