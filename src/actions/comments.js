import { showLoading, hideLoading } from 'react-redux-loading';
import { voteOnAComment, deleteComment, saveComment } from '../utils/CommentsAPI';
import { getPostComments } from '../utils/PostsAPI';
import { increaseCommentCounter, decreaseCommentCounter } from '../actions/posts';
import { generateUID } from '../utils/utils';
import { message } from 'antd';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function onReceiveComments(id) {
  return (dispatch) => {
    dispatch(showLoading());
    getPostComments(id)
      .then(response => dispatch(receiveComments(response)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveComments(obj) {
  const comments = {};
  Object.values(obj).map(comment => comments[comment.id] = comment);
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
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

export function handleAddComment(comment, postId) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    saveComment({
      ...comment,
      author: authedUser,
      timestamp: Date.now(),
      parentId: postId,
      id: generateUID()
    }).then(comment => dispatch(addComment(comment)))
      .then(() => {
        dispatch(increaseCommentCounter(postId));
        message.success('Comentário adicionado com sucesso!');
      }).catch(() => message.error('Ocorreu um erro no servidor!'))
  }
}

export function onRemoveComment(comment) {
  return dispatch => {
    dispatch(removeComment(comment.id));
    dispatch(decreaseCommentCounter(comment.parentId));
    deleteComment(comment.id)
      .then(() => message.success('Comentário removido com sucesso!'))
      .catch(() => {
        message.error('Ocorreu um erro ao remover o comentário!')
        dispatch(increaseCommentCounter(comment.parentId));
      })
  }
}

export function handleVoteComment(info) {
  return (dispatch) => {
    dispatch(voteComment(info))
    return voteOnAComment(info)
      .catch(() => {
        dispatch(voteComment(info !== 'upVote' ? 'upVote' : info));
        message.error('Ocorreu um erro no servidor!');
      });
  }
}
