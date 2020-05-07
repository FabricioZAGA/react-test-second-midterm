import { all } from 'redux-saga/effects';
import fetchPosts from './fetchPosts';
import createPost from './createPost';

export default function* () {
  yield all([
    fetchPosts(),
    createPost()
  ]);
}
