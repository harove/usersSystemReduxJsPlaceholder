import {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  createUserStart,
  createUserFailure,
  createUserSuccess,
} from "./actions";

export const fetchUsersStartThunk = () => {
  return async (dispatch, getState) => {
    // const { users } = getState();
    // if (users.data.length > 10) {
    //   return;
    // }
    dispatch(fetchUsersStart());
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        requestOptions
      );
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

export const deleteUserThunk = (id) => {
  return async (dispatch, getState) => {
    // const { users } = getState();
    // if (users.data.length > 10) {
    //   return;
    // }
    dispatch(deleteUserStart(id));
    try {
      const requestOptions = {
        method: "POST"
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        requestOptions
      );
      const data = await response.json();
      dispatch(deleteUserSuccess(id));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
};

export const createUserThunk = (user) => {
  return async (dispatch, getState) => {
    // const { users } = getState();
    // if (users.data.length > 10) {
    //   return;
    // }
    dispatch(createUserStart());
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(user),
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        requestOptions
      );
      const data = await response.json();
      dispatch(createUserSuccess(user));
    } catch (error) {
      dispatch(createUserFailure(error.message));
    }
  };
};
