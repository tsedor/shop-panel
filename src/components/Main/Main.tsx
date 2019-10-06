import React from 'react';
import { Breadcrumb, Icon, Layout, Menu, Card } from 'antd';
import styled from 'styled-components';

const { Content, Footer, Header, Sider } = Layout;

const Logo = styled.h1`
  color: #FFFFFF;
  font-family: 'Paytone One', sans-serif;
  font-size: 24px;
  padding: 10px 0 0 0;
  text-align: center;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

const StyledContent = styled(Content)`
  margin: 0 16px;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const StyledHeader = styled(Header)`
  background: #FFFFFF;
  text-align: right;
`;

const StyledIcon = styled(Icon)`
  font-size: 24px;
  padding: 0 10px;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Main: React.FC = () => {
  return (
    <StyledLayout>
      <Sider collapsible collapsed={false}>
        <Logo>Shopik</Logo>
        <Menu theme="dark">
          <Menu.Item>
            <Icon type="home" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="appstore" />
            <span>Kategorie</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="inbox" />
            <span>Produkty</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="user" />
            <span>Klienci</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="shopping-cart" />
            <span>Zamówienia</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="message" />
            <span>Opinie</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="line-chart" />
            <span>Statystyka</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <StyledHeader>
          <StyledIcon type="setting" />
          <StyledIcon type="bell" />
          <StyledIcon type="logout" />
        </StyledHeader>
        <StyledContent>
          <StyledBreadcrumb>
            <Breadcrumb.Item>Shopik</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </StyledBreadcrumb>
          <Card title="Dashboard" bordered={false}>
            Tutaj będzie treść
          </Card>
        </StyledContent>
        <StyledFooter>&copy; 2019 by Tomasz Sędor</StyledFooter>
      </Layout>
    </StyledLayout>
  )
}

export default Main;