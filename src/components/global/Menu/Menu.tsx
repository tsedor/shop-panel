import React from 'react';
import { Icon, Menu, Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import { Logo } from './Menu.styled';
import { menuItems } from './menuData';

const { Sider } = Layout;

interface ILeftMenu {
  location: any
}

const LeftMenu: React.FC<ILeftMenu> = (props) => {
  console.log(props.location.pathname)
  const activeItem = menuItems.filter(item => item.path === props.location.pathname ? true : false).pop();
  const activeItemId = typeof activeItem === "object" && activeItem.id;
  return (
    <Sider collapsible collapsed={false}>
    <Logo>Shopik</Logo>
    <Menu theme="dark" defaultSelectedKeys={[`${activeItemId}`]}>
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

export default withRouter(LeftMenu);