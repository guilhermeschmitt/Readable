import React from 'react';
import { List } from 'antd';
import Post from './Post';
import HeaderList from './HeaderList';

const PostList = ({ posts }) => {
  return (
    <React.Fragment>
      <HeaderList 
        title='POST'
        renderOrder={true}
        buttonText='POST'
        buttonAction={() => console.log('TODO:')}
      />
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
    </React.Fragment>
  )
}

export default PostList;