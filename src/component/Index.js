import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 154px;
  width: 689px;
  height: 490px;
  left: 373px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const Logo = styled.img`
  height: 300px;
  margin: 25px;
`;

const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  box-shadow: 0 2px 2px 0 #aaa;
  width: 280px;
  height: 53px;
  border-radius: 4px;
  &:hover {
    box-shadow: 2px 4px 8px 0 #aaa;
  }
  & > * {
    margin-right: 10px;
  }
`;

const GoogleIcon = styled.img`
  height: 35px;
  margin-left: 15px;
`;

const Index = function (props) {
  return (
    <Container>
      <Logo alt="logo" src="/images/logo.png" />
      <LoginButton href="/login">
        <GoogleIcon src="/images/google.png" alt="google-icon" />
        Log in with Google
      </LoginButton>
    </Container>
  );
};
export default Index;
