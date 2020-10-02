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

const Index = function (props) {
  return (
    <Container>
      <img alt="logo" src="/images/logo.png" className="logo-img" />
      <a className="Oauth-link-container" href="/login">
        <img
          src="/images/google.png"
          alt="google-icon"
          className="google icon"
        />
        <div className="Oauth-link">Log in with Google</div>
      </a>
    </Container>
  );
};
export default Index;
