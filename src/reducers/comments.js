import { GET_COMMENTS, SET_COMMENT } from 'actions';

const comments = (state = [], action = {}) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    case SET_COMMENT:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default comments;
