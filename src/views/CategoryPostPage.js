import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';

class CategoryPostPage extends React.Component {
  render() {
    return (
      <PostList
        posts={this.props.postsIds}
        goTo={() => { this.props.history.push('/new/post') }}
      />
    );
  }
}


function mapStateToProps({ posts }, { match }) {
  const { category } = match.params;

  const postsFiltered = Object.keys(posts).filter(key => posts[key].category === category);

  return {
    postsIds: postsFiltered.sort((a, b) => posts[b].voteScore - posts[a].voteScore)
  }
}

export default connect(mapStateToProps)(CategoryPostPage);