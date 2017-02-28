import { GET_LOCALE, SET_LOCALE } from 'actions';

const locale = (state = '', action = {}) => {
  switch (action.type) {
    case GET_LOCALE:
      return action.payload;
    case SET_LOCALE:
      return action.payload;
    default:
      return state;
  }
};

export default locale;
