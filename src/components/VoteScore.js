import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const VoteScore = ({ score, handleVote }) => (
  <ActionScore>
    <Icon
      type="caret-up"
      className='upVote'
      onClick={handleVote.bind(this, 'upVote')}
    />
    <span>{score}</span>
    <Icon
      type="caret-down"
      className='downVote'
      onClick={handleVote.bind(this, 'downVote')}
    />
  </ActionScore>
);

const ActionScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;

  .upVote:hover {
    color: #40a9ff;
  }

  .downVote:hover {
    color: red;
  }
`;

export default VoteScore;