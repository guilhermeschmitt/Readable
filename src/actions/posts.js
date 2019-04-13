import { voteOnAPost, deletePost, savePost } from '../utils/PostsAPI';
import { generateUID } from '../utils/utils';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const DECREASE_COMMENT_COUNTER = 'DECREASE_COMMENT_COUNTER';
export const INCREASE_COMMENT_COUNTER = 'INCREASE_COMMENT_COUNTER';

export function receivePosts(obj) {
  const posts = {};
  Object.values(obj).map(post => posts[post.id] = post)

  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  }
}

function votePost({ id, option }) {
  return {
    type: VOTE_POST,
    id,
    option
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(post) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    savePost({
      ...post,
      author: authedUser,
      timestamp: Date.now(),
      id: generateUID()
    }).then(post => dispatch(addPost(post)))
  }
}

export function onRemovePost(id) {
  return dispatch => {
    dispatch(removePost(id));
    return deletePost(id);
    //TODO: CATCH EXCEPTION E TALS
  }
}

export function decreaseCommentCounter(id) {
  return {
    type: DECREASE_COMMENT_COUNTER,
    id
  }
}

export function increaseCommentCounter(id) {
  return {
    type: INCREASE_COMMENT_COUNTER,
    id
  }
}

export function handleVotePost(info) {
  return (dispatch) => {
    dispatch(votePost(info))

    return voteOnAPost(info);

    //TODO: CATCH
    // .catch((e) => {
    //   console.warn('Error in handleVotePost: ', e)
    //   dispatch(toggleTweet(info))
    //   alert('This was an error voting in a post. Try again.')
    // })
  }
}
