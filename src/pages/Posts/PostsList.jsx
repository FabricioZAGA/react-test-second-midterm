import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { POSTS_FETCH_STARTED } from '../../redux/actionTypes';
import PostsTable from '../../components/PostsTable';

const useStyles = makeStyles({
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});



export default function PostsListPage(props) {
  const classes = useStyles();
  const { history } = props;

  const dispatch = useDispatch();
  const posts = useSelector(state => _.get(state, 'postsList.data'));
  const status = useSelector(state => _.get(state, 'postsList.status'));

  useEffect(() => {
    if (posts === null && status === 'idle') {
      dispatch({ type: POSTS_FETCH_STARTED });
    }
  });

  const navigateToCreatePostPage = () => history.push('/posts/create');

  
  if (status === 'fetching') {
    return <CircularProgress size={100} color="primary" />;

  } else if (status === 'error') {
    return <Alert severity="error">Oops! Something went terribly wrong :(</Alert>;
  } else if (posts && status === 'idle') {
    return (
      <div>
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={navigateToCreatePostPage}
          >
            Create post
          </Button>
        </div>
        <PostsTable posts={posts} />
      </div>
    );
  }

  return <div/>;
}
