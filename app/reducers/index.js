import {combineReducers} from 'redux'
import essays from './essays'
import user from './user'

const rootReducer = combineReducers({
	essays,
	user
})

export default rootReducer