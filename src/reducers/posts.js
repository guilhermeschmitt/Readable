import { RECEIVE_POSTS, REMOVE_POST, VOTE_POST } from '../actions/posts'

export default function posts(state = {}, action) {
  //TODO: FALTA TIRAR O ATRIBUTO DO OBJETO QUANDO ELE É REMOVIDO

  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case REMOVE_POST:
      return {
        ...state
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
