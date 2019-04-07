import { getPosts, getCategories } from '../utils/PostsAPI'
import { receivePosts } from './posts'
import { setAuthedUser } from './authedUser'
import { receiveCategories } from './categories'

const AUTHED_ID = 'guilhermeschmitt'

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([getCategories(), getPosts()])
      .then(([categories, posts]) => {
        dispatch(receiveCategories(categories))
        dispatch(receivePosts(posts))
        dispatch(setAuthedUser(AUTHED_ID))
      });
  }
}