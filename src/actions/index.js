export const GET_LOCALE = 'GET_LOCALE';
export const SET_LOCALE = 'SET_LOCALE';
export const locale =  require('./locale');

export const GET_INFO = 'GET_INFO';
export const INFO_ERROR = 'INFO_ERROR';

export const ADD_TODO = 'ADD_TODO';
export const user =  require('./user');

export const GET_POSTS = 'GET_POSTS';
export const SET_POST = 'SET_POST';
export const POST_ERROR = 'POST_ERROR';
export const posts = require('./posts');

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_UNMOUNT = 'AUTH_UNMOUNT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_GOOGLE = 'AUTH_GOOGLE';
export const AUTH_FACEBOOK = 'AUTH_FACEBOOK';
export const auth = require('./auth');

export const GET_COMMENTS = 'GET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';
export const COMMENT_ERROR = 'COMMENT_ERROR';

export const baseUrl = '/apis';
