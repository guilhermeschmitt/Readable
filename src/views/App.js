import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
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

  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          <Nav />
          <div>
            {this.props.loading === true
              ? null
              :
              <Switch>
                <Route path='/' exact component={PostsPage} />
                <Route path='/new/post' component={FormPostPage} />
                <Route path='/posts/:category' exact component={CategoryPostPage} />
                <Route path='/:category/:id' exact component={DetailedPostPage} />
                <Route path='/:category/:id/new/comment' component={FormCommentPage} />
              </Switch>
            }
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps({ authedUser }) {
  console.log(authedUser);

  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
