import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon } from 'antd';
import { onReceiveComments } from '../actions/comments';
import { handleVotePost, onRemovePost } from '../actions/posts';
import VoteScore from '../components/VoteScore';
import CommentsList from '../components/CommentsList';
import ModalDelete from '../components/ModalDelete';
import { timestampToDate } from '../utils/utils';

class DetailedPostPage extends React.Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(onReceiveComments(match.params.id))
  }

  handleVote = (option, e) => {
    const { id } = this.props.post;
    e.preventDefault();
    this.props.dispatch(handleVotePost({ id, option }));
  }

  onRemove = event => {
    const { dispatch, post, history } = this.props;
    event.preventDefault();
    dispatch(onRemovePost(post.id));
    history.push('/');
  }

  render() {
    const { post, commentsIds, history, location, authedUser } = this.props;

    if (!post)
      return <div>Page 404</div>

    return (
      <div>
        <DetailedPost
          voteScore={post.voteScore}
          title={post.title}
          author={post.author}
          timestamp={post.timestamp}
          body={post.body}
          onVote={this.handleVote}
          onRemove={this.onRemove}
          onEdit={() => {history.push(`${location.pathname}/edit`)}}
          authedUser={authedUser}
        />

        <CommentsList
          comments={commentsIds}
          textHeader={
            <span>
              <Icon type='message' /> Comments ({post.commentCount})
            </span>
          }
          goTo={() => { history.push(`${location.pathname}/comment/new`) }}
        />

      </div>
    );
  }
}

const DetailedPost = ({ voteScore, title, author, timestamp, body, onVote, onRemove, authedUser, onEdit }) => (
  <Container>
    <VoteScore
      score={voteScore}
      handleVote={onVote}
    />
    <InfoPost>
      <Header>
        <Title>{title}</Title>
        <Author>Posted by <b>{author}</b> at <b>{timestampToDate(timestamp)}</b></Author>
      </Header>
      <Body>
        {body}
      </Body>
    </InfoPost>
    {authedUser === author &&
      <Actions>
        <Icon
          type="edit"
          onClick={onEdit}
        />
        <ModalDelete
          text='post'
          onConfirm={onRemove}
        />
      </Actions>
    }
  </Container>
)

const Container = styled.div`
  display: flex;
`;

const InfoPost = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

const Author = styled.span`
  font-size: .8em;
  font-weight: italic;
`;

const Body = styled.div`
  padding: 3vh 0px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;


function mapStateToProps({ posts, comments, authedUser }, { match }) {
  const { category, id } = match.params;
  const post = (posts[id] && posts[id].category === category) ? posts[id] : null;
  return {
    post,
    authedUser,
    commentsIds: Object.keys(comments).sort((a, b) => comments[b].voteScore - comments[a].voteScore)
  }
}

export default connect(mapStateToProps)(DetailedPostPage);