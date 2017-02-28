import axios from 'axios';

import { baseUrl } from './';

import {
    GET_LOCALE,
    SET_LOCALE
} from './';

export const getLocale = () => {
  return dispatch => {
    return axios.get(`${baseUrl}/locale`)
      .then(response => {
        dispatch({
          type: GET_LOCALE,
          payload: response.data.language
        });
      })
      .catch(error => {
        console.log(error);
        return { error: true };
      });
  };
}

export const setLocale = (locale) => {
  return dispatch => {
    dispatch({ type: SET_LOCALE, payload: locale });
  };
}
