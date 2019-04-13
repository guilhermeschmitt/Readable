import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PostsPage from './PostsPage';
import CategoryPostPage from './CategoryPostPage';
import DetailedPostPage from './DetailedPostPage';
import FormPostPage from './FormPostPage';
import FormCommentPage from './FormCommentPage';
import Nav from '../components/Nav';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  //TODO: LOADING
  
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <div>
            <Switch>
              <Route path='/' exact component={PostsPage} />
              <Route path='/new/post' component={FormPostPage} />
              <Route path='/new/comment' component={FormCommentPage} />
              <Route path='/posts/:category' exact component={CategoryPostPage} />
              <Route path='/:category/:id' exact component={DetailedPostPage} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
