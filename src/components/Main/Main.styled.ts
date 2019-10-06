import styled from 'styled-components';
import { Breadcrumb, Icon, Layout, Badge } from 'antd';

const { Content, Footer, Header } = Layout;

export const StyledBadge = styled(Badge)`
  margin: 0 20px;
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const StyledContent = styled(Content)`
  margin: 0 16px;
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;

export const StyledHeader = styled(Header)`
  background: #FFFFFF;
  text-align: right;
`;

export const StyledIcon = styled(Icon)`
  font-size: 24px;
  margin: 0;
`;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;