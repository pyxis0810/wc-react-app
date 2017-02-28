import { GET_POSTS, SET_POST } from 'actions';

const gallery = (state = [], action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case SET_POST:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default gallery;
