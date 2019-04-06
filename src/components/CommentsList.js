import React from 'react';
import { List } from 'antd';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={comments}
      renderItem={comment => (
        <Comment
          comment={comment}
        />
      )}
    />
  )
}

export default CommentsList;