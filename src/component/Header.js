import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 8.5%);
`;

const Logo = styled.img`
  height: 48px;
  margin: 2px 15px;
`;

const Header = function (props) {
  return (
    <Container>
      <Logo src="/images/logo-icon.png" alt="logo" />
      <Menubar onLogout={props.onLogout} topics={props.topics} />
    </Container>
  );
};

export default Header;
