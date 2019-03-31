import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const VoteScore = ({ score, handleVote }) => (
  <ActionScore>
    <Icon
      type="caret-up"
      onClick={handleVote.bind(this, 'upVote')}
    />
    <span>{score}</span>
    <Icon
      type="caret-down"
      onClick={handleVote.bind(this, 'downVote')}
    />
  </ActionScore>
);

const ActionScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
`;

export default VoteScore;