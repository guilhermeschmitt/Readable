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

  // https://github.com/reduxjs/reselect
  //ACHO QUE POSSO FAZER ESSE SORT NA LISTA, porque não é obrigatório vir ordenado assim

  return {
    postsIds: Object.keys(posts).sort((a, b) => posts[b].voteScore - posts[a].voteScore)
  }
}

export default connect(mapStateToProps)(PostsPage);