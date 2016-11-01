import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_GOOGLE_REQUEST,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_ERROR,
  AUTH_GOOGLE_LOGOUT,
  AUTH_GOOGLE_CANCEL,
  AUTH_GOOGLE_RECEIVE_MESSAGE,
  AUTH_GOOGLE_REQUEST_MESSAGE
} from '../constants/actionTypes';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://fcc-google-api.herokuapp.com/api'
  : 'http://localhost:8050/api';

export function authGoogleRequest() {
  return {
    type: AUTH_GOOGLE_REQUEST,
    payload: { // not hooked up right now
      timestamp: Date.now()
    }
  };
}

export function authGoogleSuccess(data) {
  return {
    type: AUTH_GOOGLE_SUCCESS,
    payload: {
      user: data.user
    }
  };
}

export function authGoogleCancel() {
  return {
    type: AUTH_GOOGLE_CANCEL
  };
}

export function authGoogleLogin(response) {
  return dispatch => {
    // Start Google auth process
    return axios.post(`${API_URL}/auth/google/login`, response)
      .then(response => {
        // If request is good...
        // Update state to indicate user is authenticated
        // console.log(response.data);
        dispatch(authGoogleSuccess(response.data));
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
        dispatch(authGoogleError('Bad Login Info'));
      });
  };
}

export function authGoogleError(error) {
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

function authGoogleReceiveMessage(message) {
  return {
    type: AUTH_GOOGLE_RECEIVE_MESSAGE,
    payload: message
  };
}

function authGoogleRequestMessage() {
  return {
    type: AUTH_GOOGLE_REQUEST_MESSAGE
  };
}

// AJAX call for a secure resource
export function fetchMessage() {
  return dispatch => {
    dispatch(authGoogleRequestMessage());
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('user_token') }
    })
      .then(response => {
        dispatch(authGoogleReceiveMessage(response.data.message));
      });
  };
}
