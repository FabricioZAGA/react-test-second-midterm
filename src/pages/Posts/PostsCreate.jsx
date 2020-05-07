import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import PostForm from '../../components/PostForm';
import {
  POSTS_CREATE_STARTED,
  POSTS_CREATE_RESET
} from '../../redux/actionTypes';

export default function PostsCreatePage(props) {
  const { history } = props;

  const dispatch = useDispatch();
  const status = useSelector(state => _.get(state, 'createPost.status'));

  useEffect(() => {
    if (status === 'created') {
      dispatch({
        type: POSTS_CREATE_RESET
      })
      history.push('/posts');
    }
  });

  const createPost = post => {
    dispatch({
      type: POSTS_CREATE_STARTED,
      payload: post
    });
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item md={6}>
        <PostForm
          title="Create a new post"
          status={status}
          onSubmit={createPost}
          onCancel={() => history.push('/posts')}
        />
      </Grid>
    </Grid>
  );
}
