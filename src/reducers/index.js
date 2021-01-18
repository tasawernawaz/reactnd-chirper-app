import { combineReducers } from 'redux'
import users from '../reducers/users'
import tweets from '../reducers/tweets'
import authUser from '../reducers/authUser'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    authUser,
    tweets,
    users,
    loadingBar: loadingBarReducer
})