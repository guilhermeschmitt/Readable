import React from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';

const HeaderList = ({title, renderOrder, buttonText, goTo}) => (
  <Container>
    <Title>
      {title}
    </Title>
    <div>

      {renderOrder &&
        <Dropdown overlay={
          <Menu onClick={() => { }}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
          </Menu>
        }>
          <span>
            Ordenar posts <Icon type="down" />
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

export default HeaderList;