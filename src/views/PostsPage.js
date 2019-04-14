import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';

class PostsPage extends React.Component {
  render() {
    return (
      <PostList
        posts={this.props.postsIds}
        goTo={() => { this.props.history.push('/new/post') }}
      />
    );
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return {
    postsIds: Object.keys(posts)
  }
}

export default connect(mapStateToProps)(PostsPage);