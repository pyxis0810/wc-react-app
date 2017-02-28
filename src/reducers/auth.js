import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_UNMOUNT } from 'actions';

const auth = (state = {}, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
      const email = localStorage.getItem('email');
      const role = localStorage.getItem('role');
      return { ...state, authenticated: true, email, role };
    case UNAUTH_USER:
      return { ...state, authenticated: false, email: '', role: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case AUTH_UNMOUNT:
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default auth;
