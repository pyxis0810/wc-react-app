import axios from 'axios';

import { baseUrl } from './';

import {
    GET_COMMENTS,
    SET_COMMENT,
    COMMENT_ERROR
} from './';

export const commentError = (error) => {
  return {
    type: COMMENT_ERROR,
    payload: error
  };
}

export const getComments = () => {
  return dispatch => {
    return axios.get(`${baseUrl}/comments`)
      .then(response => {
        dispatch({
          type: GET_COMMENTS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
        dispatch(commentError('error.comments.failed'));
      });
  };
}

export const setComment = ({ username, content }) => {
  return dispatch => {
    return axios.post(`${baseUrl}/comments`, { username, content })
      .then(response => {
        dispatch({
          type: SET_COMMENT,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error);
        dispatch(commentError(error.response.data.error));
      });
  }
}
