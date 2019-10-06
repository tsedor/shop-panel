import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Route } from 'react-router';

import { StyledLayout, StyledHeader, StyledIcon, StyledContent, StyledBreadcrumb, StyledFooter } from './Main.styled';
import LeftMenu from '../global/Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Clients from '../Clients/Clients';
import Orders from '../Orders/Orders';
import Reviews from '../Reviews/Reviews';
import Statistics from '../Statistics/Statistics';

const Main: React.FC = () => {
  return (
    <StyledLayout>
      <LeftMenu />
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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/statistics" component={Statistics} />
        </StyledContent>
        <StyledFooter>&copy; 2019 by Tomasz Sędor</StyledFooter>
      </Layout>
    </StyledLayout>
  )
}

export default Main;