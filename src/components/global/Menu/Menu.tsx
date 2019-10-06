import React from 'react';
import { Icon, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

import { Logo } from './Menu.styled';
import { menuItems } from './menuData';

const { Sider } = Layout;

const LeftMenu: React.FC = () => {
  return (
    <Sider collapsible collapsed={false}>
    <Logo>Shopik</Logo>
    <Menu theme="dark" defaultSelectedKeys={['1']}>
      {menuItems.map(item => (
        <Menu.Item key={item.id}>
          <Icon type={item.icon} />
          <span>{item.text}</span>
          <Link to={item.path} />
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
  )
}

export default LeftMenu;