import styled from 'styled-components';
import { Button, Form } from 'antd';

export const LoginContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Logo = styled.h1`
  font-family: 'Paytone One', sans-serif;
  margin: 0;
`;

export const LogoSubtitle = styled.h4`
  font-family: 'Paytone One', sans-serif;
  margin: 0 0 20px 0;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;
