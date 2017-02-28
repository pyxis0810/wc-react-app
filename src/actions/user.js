import {
    ADD_TODO
} from './';

export const addTodo = () => {
  return dispatch => {
    dispatch({ type: ADD_TODO, payload: 'user' });
  }
}
