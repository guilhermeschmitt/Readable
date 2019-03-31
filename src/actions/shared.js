import { getPosts } from '../utils/PostsAPI' 
import { receivePosts } from '../actions/posts' 
import { setAuthedUser } from '../actions/authedUser' 

const AUTHED_ID = 'guilhermeschmitt' 

export function handleInitialData () { 
  return (dispatch) => { 
    return getPosts() 
      .then((posts) => { 
        dispatch(receivePosts(posts)) 
        dispatch(setAuthedUser(AUTHED_ID)) 
      }) 
  } 
}  
