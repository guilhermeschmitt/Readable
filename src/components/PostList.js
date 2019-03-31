import React from 'react';
import { List } from 'antd';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={post => (
        <Post
          id={post}
          limit={255}
        />
      )}
    />
  )
}

export default PostList;