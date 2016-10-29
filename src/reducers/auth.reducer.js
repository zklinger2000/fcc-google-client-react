import initialState from './initialState';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../constants/actionTypes';

export default function(state = initialState.auth, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload.user, error: null, message: null };
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: {}, error: null, message: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload, message: null };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload, error: null };
    default:
      return state;
  }
}
