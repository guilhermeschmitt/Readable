import { voteOnAComment, deleteComment } from '../utils/CommentsAPI';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function receiveComments(obj) {
  const comments = {};
  Object.values(obj).map(comment => comments[comment.id] = comment);
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function voteComment({ id, option }) {
  return {
    type: VOTE_COMMENT,
    id,
    option
  }
}

export function onRemoveComment(id) {
  return dispatch => {
    dispatch(removeComment(id));
    return deleteComment(id);
    //TODO: CATCH EXCEPTION E TALS
  }
}

export function handleVoteComment(info) {
  return (dispatch) => {
    dispatch(voteComment(info))
    return voteOnAComment(info);
    //TODO: CATCH
    // .catch((e) => {
    //   console.warn('Error in handleVotePost: ', e)
    //   dispatch(toggleTweet(info))
    //   alert('This was an error voting in a post. Try again.')
    // })
  }
}
