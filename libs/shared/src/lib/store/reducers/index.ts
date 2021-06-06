import {combineReducers} from 'redux'
import {likesReducer} from './likes'

const rootReducer = combineReducers({
  likes: likesReducer,
})

export default rootReducer
