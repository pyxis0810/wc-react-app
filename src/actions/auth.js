import { browserHistory } from 'react-router';
import axios from 'axios';

import { baseUrl } from './';

import {
  AUTH_USER,
  AUTH_GOOGLE,
  AUTH_FACEBOOK,
  AUTH_ERROR,
  AUTH_UNMOUNT,
  UNAUTH_USER,
} from './';

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const signIn = ({ email, password }) => {
  return dispatch => {
    return axios.post(`${baseUrl}/auth/signin`, { email, password })
      .then(response => {
        dispatch({
          type: AUTH_USER
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError('error.signin.failed'));
      });
  };
}

export const googleAuth = () => {
  return dispatch => {
    dispatch({ type: AUTH_GOOGLE });
    location.href=`${baseUrl}/auth/google`;
  }
}

export const facebookAuth = () => {
  return dispatch => {
    dispatch({ type: AUTH_FACEBOOK });
    location.href=`${baseUrl}/auth/facebook`;
  }
}

export const getInfo = (token) => {
  return dispatch => {
    return axios.get(`${baseUrl}/auth/info`, { headers: { Authorization: token } });
  }
}

export const signUp = ({ email, password }) => {
  return dispatch => {
    return axios.post(`${baseUrl}/auth/signup`, { email, password })
      .then(response => {
        dispatch({
          type: AUTH_USER
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
        browserHistory.push('/');
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authError(error.response.data.error));
      });
  }
}

export const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  return { type: UNAUTH_USER };
}

export const unmountAuth = () => {
  return { type: AUTH_UNMOUNT };
}
