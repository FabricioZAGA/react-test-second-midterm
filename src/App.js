import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PostsPage from './pages/Posts/index';
import './App.css';

function App(props) {
  const { store } = props;
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/posts" component={PostsPage} />
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
