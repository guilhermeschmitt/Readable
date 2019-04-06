import React from 'react';
import styled from 'styled-components';
import VoteScore from './VoteScore';

class Comment extends React.Component {

  render() {
    const { voteScore, body, author, timestamp } = this.props.comment;
    return (
      <Container>
        <VoteScore
          score={voteScore}
          handleVote={() => { }}
        />
        <InfoComment>
          <Title><b>{author}</b>  at <b>{timestamp}</b></Title>
          <span>{body}</span>
        </InfoComment>
        <Actions>
          <span>EDITAR</span>
          <span>REMOVER</span>
        </Actions>
      </Container>
    )
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

export default Comment;