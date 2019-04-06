import { combineReducers } from 'redux' 
import authedUser from './authedUser' 
import posts from './posts'
import comments from './comments'

export default combineReducers({ 
  authedUser, 
  posts,
  comments
})  
