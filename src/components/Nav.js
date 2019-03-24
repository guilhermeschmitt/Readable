import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <Menu mode="horizontal" >
    <Menu.Item key="home">
      <NavLink to='/' exact>
        <Icon type="home" />Home
      </NavLink>
    </Menu.Item>
    <Menu.Item key="new">
      <NavLink to='/new' exact>
        <Icon type="plus" />Novo post
      </NavLink>
    </Menu.Item>
  </Menu>

);

export default Nav;