import {
  POSTS_CREATE_STARTED,
  POSTS_CREATE_COMPLETED,
  POSTS_CREATE_ERROR,
  POSTS_CREATE_RESET
} from '../actionTypes';

const initialState = {
  status: 'idle'
};

export default function (state = initialState, action) {
  switch(action.type) {
    case POSTS_CREATE_STARTED:
      return {
        status: 'in-progress'
      };
    case POSTS_CREATE_COMPLETED:
      return {
        status: 'created'
      };
    case POSTS_CREATE_ERROR:
      return {
        status: 'error'
      };
    case POSTS_CREATE_RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
