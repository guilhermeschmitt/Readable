import React from 'react';
import { List, Icon, Tag } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const data = [
  {
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false,
    "commentCount": 2
  },
  {
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false,
    "commentCount": 2
  },
  {
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false,
    "commentCount": 2
  }
];

const PostsPage = () => (
  <List
    itemLayout="vertical"
    dataSource={data}
    renderItem={item => (
      <Post
        item={item}
        limit={255}
      />
    )}
  />
);

const Post = ({ item, limit }) => {
  const { id, voteScore, author, timestamp, category, body, commentCount, title } = item;
  return (
    <div style={{ display: 'flex' }}>
      <VoteScore score={voteScore} />
      <div>
        <UserInfo> Posted by {author} {timestamp} (time) ago </UserInfo>
        <Title>
          <Link to={`/posts/${category}`}>
            <Tag className={category}> {category} </Tag>
          </Link>
          <Link to={`/post/${id}`}>
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
};

const VoteScore = ({ score }) => (
  <ActionScore>
    <Icon type="caret-up" />
    <span>{score}</span>
    <Icon type="caret-down" />
  </ActionScore>
);

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

const ActionScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
`;

export default PostsPage;