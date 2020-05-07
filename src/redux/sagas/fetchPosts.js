import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  POSTS_FETCH_COMPLETED,
  POSTS_FETCH_ERROR,
  POSTS_FETCH_STARTED
} from '../actionTypes';
import postsApiCall from '../../api/posts';

function* fetchPosts() {
  try {
    const result = yield call(postsApiCall, 'GET', '/');

    yield put({
      type: POSTS_FETCH_COMPLETED,
      payload: result.data
    });
  } catch (e) {
    yield put({
      type: POSTS_FETCH_ERROR
    });
  }
}

export default function* () {
  yield takeLatest(POSTS_FETCH_STARTED, fetchPosts);
}
