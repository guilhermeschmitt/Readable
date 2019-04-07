import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import VoteScore from './VoteScore';
import { handleVoteComment, onRemoveComment } from '../actions/comments';
import {decreaseCommentCounter} from '../actions/posts';
import { Button } from 'antd';

class Comment extends React.Component {

  handleVote = (option, e) => {
    const { id } = this.props.comment;
    e.preventDefault();
    this.props.dispatch(handleVoteComment({ id, option }))
  }

  //TODO: Vai abrir modal perguntando se a pessoa deseja excluir e daí depois vem a lógica abaixo;
  onRemove = event => {
    const { dispatch, comment } = this.props;
    event.preventDefault();
    dispatch(onRemoveComment(comment.id))
      .then(() => dispatch(decreaseCommentCounter(comment.parentId)));
  }

  render() {
    const { voteScore, body, author, timestamp } = this.props.comment;
    return (
      <Container>
        <VoteScore
          score={voteScore}
          handleVote={this.handleVote}
        />
        <InfoComment>
          <Title><b>{author}</b>  at <b>{timestamp}</b></Title>
          <span>{body}</span>
        </InfoComment>
        <Actions>
          <span>EDITAR</span>
          <Button onClick={this.onRemove}>
            Remover
          </Button>
        </Actions>
      </Container>
    )
  }
}

function mapStateToProps({ comments }, { id }) {
  const comment = comments[id];

  return {
    comment: comment ? comment : null,
  }
}

const Container = styled.div`
  display: flex;
  padding: 2vh 0px;
`;

const InfoComment = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 0.8em;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

export default connect(mapStateToProps)(Comment);