import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  POSTS_CREATE_STARTED,
  POSTS_CREATE_COMPLETED,
  POSTS_CREATE_ERROR
} from '../actionTypes';
import postsApiCall from '../../api/posts';

function* createPost(action) {
  const post = action.payload;
  try {
    const result = yield call(postsApiCall, 'POST', '/', post);

    yield put({
      type: POSTS_CREATE_COMPLETED,
      payload: result.data
    });
  } catch (e) {
    yield put({
      type: POSTS_CREATE_ERROR
    });
  }
}

export default function* () {
  yield takeLatest(POSTS_CREATE_STARTED, createPost);
}
