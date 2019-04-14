import React from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { sortPostList } from '../actions/posts';

const HeaderList = ({ title, renderOrder, buttonText, goTo, dispatch }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <div>

      {renderOrder &&
        <Dropdown overlay={
          <Menu onClick={({ key }) => dispatch(sortPostList(key))} >
            <Menu.Item key="voteScore">
              Top Rated
            </Menu.Item>
            <Menu.Item key="timestamp">
              Newest
            </Menu.Item>
          </Menu>
        }>
          <span style={{ marginRight: '2vw' }} >
            Order by <Icon type="down" />
          </span>
        </Dropdown>
      }

      <Button
        type="primary"
        icon="plus"
        onClick={goTo}
      >
        {buttonText}
      </Button>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`

export default connect()(HeaderList);