import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon } from 'antd';
import VoteScore from './VoteScore';
import ModalDelete from './ModalDelete';
import { handleVoteComment, onRemoveComment } from '../actions/comments';
import { timestampToDate } from '../utils/utils';

class Comment extends React.Component {

  handleVote = (option, e) => {
    const { id } = this.props.comment;
    e.preventDefault();
    this.props.dispatch(handleVoteComment({ id, option }))
  }

  onRemove = event => {
    const { dispatch, comment } = this.props;
    event.preventDefault();
    dispatch(onRemoveComment(comment))
  }

  render() {
    const { voteScore, body, author, timestamp } = this.props.comment;
    const { authedUser } = this.props;
    return (
      <Container>
        <VoteScore
          score={voteScore}
          handleVote={this.handleVote}
        />
        <InfoComment>
          <Title><b>{author}</b>  at <b>{timestampToDate(timestamp)}</b></Title>
          <span>{body}</span>
        </InfoComment>
        {authedUser === author &&
          <Actions>
            <Icon
              type="edit"
              onClick={() => console.log("TODO:")}
            />
            <ModalDelete
              text='comment'
              onConfirm={this.onRemove}
            />
          </Actions>
        }
      </Container>
    )
  }
}

function mapStateToProps({ comments, authedUser }, { id }) {
  const comment = comments[id];

  return {
    comment: comment ? comment : null,
    authedUser
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