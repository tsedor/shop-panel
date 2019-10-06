import React from 'react';
import styled from 'styled-components';
import { Button, Card, Form, Icon, Input } from 'antd';

const LoginContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Logo = styled.h1`
  font-family: 'Paytone One', sans-serif;
  margin: 0;
`;

const LogoSubtitle = styled.h4`
  font-family: 'Paytone One', sans-serif;
  margin: 0 0 20px 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;

const Login: React.FC = (props) => {
  const { form } = props as any;
  return (
    <LoginContainer>
      <Logo>Shopik</Logo>
      <LogoSubtitle>Panel administracyjny</LogoSubtitle>
      <Card>
        <Form onSubmit={(e) => {e.preventDefault(); console.log('hahaha')}}>
          <Form.Item>{form.getFieldDecorator('username', {
            rules: [{ required: true, message: 'Podaj swoją nazwę użytkownika' }],
          })(
            <Input prefix={<Icon type="user" />} placeholder="Nazwa użytkownika" />
          )}
          </Form.Item>
          <Form.Item>{form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Podaj swoje hasło' }],
          })(
            <Input.Password prefix={<Icon type="lock" />} placeholder="Hasło" />
          )}
          </Form.Item>
          <StyledFormItem>
            <StyledButton type="primary" htmlType="submit">Zaloguj się</StyledButton>
          </StyledFormItem>
        </Form>
      </Card>
    </LoginContainer>
  )
}

export default Form.create()(Login);