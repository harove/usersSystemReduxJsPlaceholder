import {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
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
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        requestOptions
      );
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersSuccess(error.message));
    }
  };
};
