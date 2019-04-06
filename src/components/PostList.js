import React from 'react';
import { List } from 'antd';
import Post from './Post';

const PostList = ({ posts }) => {

  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={idPost => (
        <Post
          id={idPost}
          limit={255}
        />
      )}
    />
  )
}

export default PostList;