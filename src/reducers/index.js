import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import locale from './locale';
import user from './user';
import info from './info';
import posts from './posts';
import comments from './comments';

export default combineReducers({
  auth: auth,
  user: user,
  info: info,
  locale: locale,
  posts: posts,
  comments: comments,
  form: form
});
