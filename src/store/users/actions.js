import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  
} from "./constants";

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (errorMessage) => ({
  type: FETCH_USERS_FAILURE,
  payload: errorMessage,
});

export const deleteUserStart = () => ({
  type: DELETE_USER_START,
});

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: parseInt(id)
});

export const deleteUserFailure = (errorMessage) => ({
  type: DELETE_USER_FAILURE,
  payload: errorMessage,
});

export const createUserStart = () => ({
  type: CREATE_USER_START,
});

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user
});

export const createUserFailure = (errorMessage) => ({
  type: CREATE_USER_FAILURE,
  payload: errorMessage,
});