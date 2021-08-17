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

const initialState = {
  isFetching: false,
  data: [],
  errorMessage: null,
  message: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        data: [],
      };
    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    case CREATE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, action.payload],
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
export default usersReducer;
