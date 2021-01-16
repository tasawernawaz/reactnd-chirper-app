import { RECEIVE_USERS } from '../actions/users'

export default function users (state={}, action) {
    // TODO: check the spread operator
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}