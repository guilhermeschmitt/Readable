import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsPage from './PostsPage';
import CategoryPostPage from './CategoryPostPage';
import DetailedPostPage from './DetailedPostPage';
import NewPostPage from './NewPostPage';
import Nav from '../components/Nav';
import { connect } from 'react-redux' 
import { handleInitialData } from '../actions/shared' 

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
            <Route path='/' exact component={PostsPage} />
            <Route path='/posts/:category' exact component={CategoryPostPage} />
            <Route path='/:category/:id' exact component={DetailedPostPage} />
            <Route path='/new' component={NewPostPage} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect()(App);
