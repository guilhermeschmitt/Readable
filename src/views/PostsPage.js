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

function mapStateToProps({ posts }) {
  return {
    postsIds: Object.keys(posts)
      .sort((a, b) => posts[b].voteScore - posts[a].voteScore)
  }
}

export default connect(mapStateToProps)(PostsPage);