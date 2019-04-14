import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import PostsPage from './PostsPage';
import CategoryPostPage from './CategoryPostPage';
import DetailedPostPage from './DetailedPostPage';
import NewPostPage from './NewPostPage';
import EditPostPage from './EditPostPage';
import NewCommentPage from './NewCommentPage';
import EditCommentPage from './EditCommentPage';
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
          <div style={{margin: '2vh 2vw 0px 5vw'}}>
            {this.props.loading === true
              ? null
              :
              <Switch>
                <Route path='/' exact component={PostsPage} />
                <Route path='/new/post' component={NewPostPage} />
                <Route path='/:category' exact component={CategoryPostPage} />
                <Route path='/:category/:id' exact component={DetailedPostPage} />
                <Route path='/:category/:id/edit' exact component={EditPostPage} />
                <Route path='/:category/:id/comment/new' component={NewCommentPage} />
                <Route path='/:category/:id/comment/edit/:idcomment' component={EditCommentPage} />
              </Switch>
            }
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
