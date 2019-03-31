import { combineReducers } from 'redux' 
import authedUser from './authedUser' 
import posts from './posts' 

export default combineReducers({ 
  authedUser, 
  posts 
})  
