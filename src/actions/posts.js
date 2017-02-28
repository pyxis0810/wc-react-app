import axios from 'axios';
import { browserHistory } from 'react-router';

import { baseUrl } from './';

import {
  GET_POSTS,
  SET_POST,
  POST_ERROR
} from './';

export const postError = (error) => {
  return {
    type: POST_ERROR,
    payload: error
  };
}

export const getPosts = () => {
  return dispatch => {
    axios.get(`${baseUrl}/posts`)
      .then(response => {
        dispatch({
          type: GET_POSTS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        return { error: true };
      });
  };
}

export const setPost = (form, config) => {
  return dispatch => {
    axios.post(`${baseUrl}/posts`, form, config)
      .then(response => {
        console.log(response);
        dispatch({
          type: SET_POST,
          payload: response.data
        });
        browserHistory.push('/posts');
      })
      .catch(error => {
        dispatch(postError('error.post.failed'));
      });
  };
}
