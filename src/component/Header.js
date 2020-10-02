import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';

const Logo = styled.img`
  height: 48px;
  margin: 2px 15px;
`;

const Header = function (props) {
  return (
    <div className="header">
      <Logo src="/images/logo-icon.png" alt="logo" />
      <Menubar onLogout={props.onLogout} topics={props.topics} />
    </div>
  );
};

export default Header;
