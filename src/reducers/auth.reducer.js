import initialState from './initialState';
import {
  AUTH_GOOGLE_REQUEST,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_LOGOUT,
  AUTH_GOOGLE_ERROR,
  AUTH_GOOGLE_CANCEL,
  AUTH_GOOGLE_RECEIVE_MESSAGE,
  AUTH_GOOGLE_REQUEST_MESSAGE
} from '../constants/actionTypes';

export default function(state = initialState.auth, action) {
  switch(action.type) {
    case AUTH_GOOGLE_REQUEST:
      return { ...state, isLoggingIn: true };
    case AUTH_GOOGLE_SUCCESS:
      return { ...state, authenticated: true, user: action.payload.user, error: null, message: null, isLoggingIn: false };
    case AUTH_GOOGLE_LOGOUT:
      return { ...state, authenticated: false, user: {}, error: null, message: null };
    case AUTH_GOOGLE_ERROR:
      return { ...state, error: action.payload, message: null, isLoggingIn: false };
    case AUTH_GOOGLE_CANCEL:
      return { ...state, isLoggingIn: false };
    case AUTH_GOOGLE_RECEIVE_MESSAGE:
      return { ...state, message: action.payload, error: null };
    default:
      return state;
  }
}
