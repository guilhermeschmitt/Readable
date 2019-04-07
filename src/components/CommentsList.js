import React from 'react';
import { List } from 'antd';
import Comment from './Comment';


//TODO: Tenho que fazer um loading pra cá
const CommentsList = ({ comments }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={comments}
      renderItem={idComment => (
        <Comment
          id={idComment}
        />
      )}
    />
  )
}

export default CommentsList;