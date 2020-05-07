import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PostsListPage from './PostsList';
import PostsCreatePage from './PostsCreate';

export default function PostsPage() {
  return (
    <Container>
      <Typography variant="h2">ISSC 411 Aplicaciones Empresariales - Posts</Typography>
      <hr/>
      <Switch>
        <Route path='/posts/list' component={PostsListPage} />
        <Route path='/posts/create' component={PostsCreatePage} />
        <Route exact path="/posts">
          <Redirect to="/posts/list" />
        </Route>
      </Switch>
    </Container>
  );
}
