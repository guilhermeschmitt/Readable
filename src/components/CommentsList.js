import React from 'react';
import { List } from 'antd';
import Comment from './Comment';
import HeaderList from './HeaderList';


//TODO: Tenho que fazer um loading pra cá
const CommentsList = ({ comments, textHeader, goTo }) => {
  return (
    <React.Fragment>
      <HeaderList
        title={textHeader}
        renderOrder={false}
        buttonText='COMMENT'
        goTo={goTo}
      />
      <List
        itemLayout="vertical"
        dataSource={comments}
        renderItem={idComment => (
          <Comment
            id={idComment}
          />
        )}
      />
    </React.Fragment>
  )
}

export default CommentsList;