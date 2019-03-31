import { voteOnAPost } from '../utils/PostsAPI';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const VOTE_POST = 'VOTE_POST';

export function receivePosts(obj) {
  const posts = {};
  Object.values(obj).map(post => posts[post.id] = post)

  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

function votePost({ id, option }) {
  return {
    type: VOTE_POST,
    id,
    option
  }
}

export function handleVotePost(info) {
  return (dispatch) => {
    dispatch(votePost(info))

    return voteOnAPost(info);

    //FIXME: CATCH
    // .catch((e) => {
    //   console.warn('Error in handleVotePost: ', e)
    //   dispatch(toggleTweet(info))
    //   alert('This was an error voting in a post. Try again.')
    // })
  }
}
