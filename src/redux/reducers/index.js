import { combineReducers } from 'redux';
import postsList from './postsList';
import createPost from './createPost';

export default combineReducers({
  postsList,
  createPost
});
