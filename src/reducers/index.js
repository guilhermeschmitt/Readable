import { combineReducers } from 'redux' 
import authedUser from './authedUser' 
import posts from './posts'
import comments from './comments'
import categories from './categories'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({ 
  authedUser, 
  posts,
  comments,
  categories,
  loadingBar: loadingBarReducer,
})  
