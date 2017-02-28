import { ADD_TODO } from 'actions';

const user = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default user;
