import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const VoteScore = ({ score }) => (
  <ActionScore>
    <Icon type="caret-up" />
    <span>{score}</span>
    <Icon type="caret-down" />
  </ActionScore>
);

const ActionScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
`;

export default VoteScore;