import {
  RECEIVE_POSTS, REMOVE_POST, VOTE_POST, DECREASE_COMMENT_COUNTER,
  INCREASE_COMMENT_COUNTER, ADD_POST, EDIT_POST
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        [post.id]: post,
      };
    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          title: [action.post.title],
          body: [action.post.body]
        }
      }
    case REMOVE_POST:
      let newState = {};
      Object.keys(state).map(key => key !== action.id ? newState[key] = state[key] : null);
      return { ...newState }
    case INCREASE_COMMENT_COUNTER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount += 1
        }
      }
    case DECREASE_COMMENT_COUNTER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount -= 1
        }
      }
    case VOTE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.option === "upVote"
            ? state[action.id].voteScore += 1
            : state[action.id].voteScore -= 1
        }
      }
    default:
      return state
  }
}  
