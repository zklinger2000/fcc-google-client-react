import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_GOOGLE_REQUEST,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_ERROR,
  AUTH_GOOGLE_LOGOUT,
  AUTH_GOOGLE_CANCEL,
  AUTH_GOOGLE_FETCH_MESSAGE
} from '../constants/actionTypes';
// import  from '../../config';

// TODO: Perfect opportunity to use 'loading...' UX's for slow AJAX calls from fcc-google-api server
// TODO: Add heroku address
// const API_URL = 'https://fcc-google-api.herokuapp.com/api';
const API_URL = 'http://localhost:8050/api';

export function authGoogleRequest() {
  return function(dispatch) {
    dispatch({
      type: AUTH_GOOGLE_REQUEST,
      payload: { // not hooked up right now
        timestamp: Date.now()
      }
    });
  };
}

export function authGoogleCancel() {
  return function(dispatch) {
    dispatch({
      type: AUTH_GOOGLE_CANCEL
    });
  };
}

export function authGoogleLogin(response) {
  return function(dispatch) {
    // Start Google auth process
    axios.post(`${API_URL}/auth/google/login`, response)
      .then(response => {
        // If request is good...
        // Update state to indicate user is authenticated
        // console.log(response.data);
        dispatch({
          type: AUTH_GOOGLE_SUCCESS,
          payload: {
            user: response.data.user
          }
        });
        // TODO: Add token timeout data
        // Save the JWT token and User name locally
        localStorage.setItem('user_token', response.data.token);
        localStorage.setItem('user_name', response.data.user.name);
        // Redirect back to 'home' route
        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad...
        // Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function authError(error) {
  console.warn('error', error);
  return {
    type: AUTH_GOOGLE_ERROR,
    payload: error
  };
}

// TODO: Add token timeout data
export function logoutUser() {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_name');
  return {
    type: AUTH_GOOGLE_LOGOUT
  };
}
// AJAX call for a secure resource
export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('user_token') }
    })
      .then(response => {
        dispatch({
          type: AUTH_GOOGLE_FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
