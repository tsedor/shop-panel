import React, { useRef } from 'react';
import { Card, Form, Icon, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST } from '../../reducers/login/types';
import { LoginContainer, Logo, LogoSubtitle, StyledFormItem, StyledButton } from './Login.styled';
import { Redirect } from 'react-router';
import { AppState } from '../../reducers';
import Password from 'antd/lib/input/Password';

const Login: React.FC = (props) => {
  const { form } = props as any;
  const dispatch = useDispatch();

  const loginRef = useRef<Input>(null);
  const passwordRef = useRef<Password>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch({ type: LOGIN_REQUEST, login: loginRef.current.props.value, password: passwordRef.current.props.value })
    }
  }
  const loggedIn = useSelector((state: AppState) => state.loginReducer.loggedIn);

  return (
    <LoginContainer>
      {loggedIn && <Redirect to="/" />}
      <Logo>Shopik</Logo>
      <LogoSubtitle>Panel administracyjny</LogoSubtitle>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Item>{form.getFieldDecorator('username', {
            rules: [{ required: true, message: 'Podaj swoją nazwę użytkownika' }],
          })(
            <Input ref={loginRef} prefix={<Icon type="user" />} placeholder="Nazwa użytkownika" />
          )}
          </Form.Item>
          <Form.Item>{form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Podaj swoje hasło' }],
          })(
            <Input.Password ref={passwordRef} prefix={<Icon type="lock" />} placeholder="Hasło" />
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