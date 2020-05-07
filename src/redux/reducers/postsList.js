import {
  POSTS_FETCH_STARTED,
  POSTS_FETCH_COMPLETED,
  POSTS_FETCH_ERROR,
  POSTS_FETCH_RESET
} from '../actionTypes';

const initialState = {
  data: null,
  status: 'idle'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_STARTED:
      return {
        ...state,
        status: 'fetching'
      };
    case POSTS_FETCH_COMPLETED:
      return {
        data: action.payload,
        status: 'idle'
      };
    case POSTS_FETCH_ERROR:
      return {
        ...state,
        status: 'error'
      };
    case POSTS_FETCH_RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
