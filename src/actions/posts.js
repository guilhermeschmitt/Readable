import { voteOnAPost, deletePost } from '../utils/PostsAPI';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const REMOVE_POST = 'REMOVE_POST';

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

export function onRemovePost(id) {
  return dispatch => {
    dispatch(removePost(id));
    return deletePost(id);
    //TODO: CATCH EXCEPTION E TALS
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
