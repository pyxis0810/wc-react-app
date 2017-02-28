import { GET_INFO } from 'actions';

const info = (state = {}, action = {}) => {
  switch (action.type) {
    case GET_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default info;
