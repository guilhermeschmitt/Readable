import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ categories }) => (
  <Menu mode="horizontal" >
    <Menu.Item key="home">
      <NavLink to='/' exact>
        <Icon type="home" />Home
      </NavLink>
    </Menu.Item>
    <Menu.SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="appstore" />
          <span>Categories</span>
        </span>
      }
    >
      {Object.values(categories).map(({ name, path }) =>
        (
          <Menu.Item key={name}>
            <NavLink to={`/${path}`} exact>
              <Icon type="tag" />
              <span>{name.toUpperCase()}</span>
            </NavLink>
          </Menu.Item>
        )
      )}
    </Menu.SubMenu>
  </Menu>
);

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps)(Nav);