import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { receiveComments } from '../actions/comments';
import { handleVotePost, onRemovePost } from '../actions/posts';
import { getPostComments } from '../utils/PostsAPI';
import VoteScore from '../components/VoteScore';
import CommentsList from '../components/CommentsList';
import { Button } from 'antd';

class DetailedPostPage extends React.Component {
  /* 
  TODO: Colocar um efeito on hover nas setas depois, quando jogar o estilo todo pro css
  TODO: Acho que o botão de Novo alguma coisa, podia ficar na lista mesmo.
  */

  componentDidMount() {
    const { match, dispatch } = this.props;
    getPostComments(match.params.id)
      .then(response => dispatch(receiveComments(response)))
  }

  handleVote = (option, e) => {
    const { id } = this.props.post;
    e.preventDefault();
    this.props.dispatch(handleVotePost({ id, option }));
  }

  onRemove = event => {
    //TODO: Vai abrir modal perguntando se a pessoa deseja excluir e daí depois vem a lógica abaixo;
    const { dispatch, post } = this.props;
    event.preventDefault();
    dispatch(onRemovePost(post.id))
  }

  render() {
    const { post, commentsIds } = this.props;

    if (!post)
      return <div>Página 404</div>

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
        />

        <div>
          Comentários ({post.commentCount})
        </div>

        <CommentsList
          comments={commentsIds}
        />


      </div>
    );
  }
}

const DetailedPost = ({ voteScore, title, author, timestamp, body, onVote, onRemove }) => (
  <Container>
    <VoteScore
      score={voteScore}
      handleVote={onVote}
    />
    <InfoPost>
      <Header>
        <Title>{title}</Title>
        <Author>Posted by <b>{author}</b> at <b>{timestamp}</b></Author>
      </Header>
      <Body>
        {body}
      </Body>
    </InfoPost>
    <Actions>
      <span>EDITAR</span>
      <Button onClick={onRemove}>
        REMOVER
      </Button>
    </Actions>
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


function mapStateToProps({ posts, comments }, { match }) {
  const { category, id } = match.params;
  const post = (posts[id] && posts[id].category === category) ? posts[id] : null;
  return { 
    post, 
    commentsIds: Object.keys(comments).sort((a, b) => comments[b].voteScore - comments[a].voteScore) }
}

export default connect(mapStateToProps)(DetailedPostPage);