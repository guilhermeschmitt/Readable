import React from 'react';
import { connect } from 'react-redux';
import { Icon, Tag } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VoteScore from './VoteScore';
import { handleVotePost } from '../actions/posts';
import { timestampToDate } from '../utils/utils';

class Post extends React.Component {

  handleVote = (option, e) => {
    const { dispatch, post } = this.props;
    e.preventDefault();
    dispatch(handleVotePost({
      id: post.id,
      option
    }))

  }

  render() {
    const { limit, post } = this.props;
    const { id, voteScore, author, timestamp, category, body, commentCount, title } = post;

    return (
      <div style={{ display: 'flex' }}>
        <VoteScore
          score={voteScore}
          handleVote={this.handleVote}
        />
        <div>
          <UserInfo> Posted by {author} at {timestampToDate(timestamp)} </UserInfo>
          <Title>
            <Link to={`/posts/${category}`}>
              <Tag className={category}> {category} </Tag>
            </Link>
            <Link to={`/${category}/${id}`}>
              {title}
            </Link>
          </Title>
          <Body>
            {(limit && body.length > limit)
              ? `${body.substring(0, limit)}...`
              : body
            }
          </Body>
          <span>
            <Icon type='message' style={{ marginRight: 8 }} />
            {commentCount}
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { id, limit }) {
  const post = posts[id];

  return {
    post: post ? post : null,
    limit
  }
}

const UserInfo = styled.div`
  font-size: 12px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8; 
  display: flex;
  align-items: center;

  .react {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }

  .outro{
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }

  .outro2{
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
`;

const Body = styled.div``;

export default connect(mapStateToProps)(Post)