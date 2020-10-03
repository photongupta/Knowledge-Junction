import React, {useContext} from 'react';
import Api from '../requestApi';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import UserContext from './context/UserContext';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Icon = styled.img`
  margin-top: 6px;
  height: 35px;
  margin-right: 15px;
`;

const Avatar = styled.img`
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  &:hover ~ #Dropdown {
    display: flex;
  }
`;

const Dropdown = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 56px;
  right: 90px;
  background: rgb(245, 245, 245);
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  min-width: 90px;
  &:hover {
    display: flex;
  }

  &:before {
    position: absolute;
    bottom: 100%;
    right: 50px;
    border: 5px solid transparent;
    content: ' ';
    border-bottom-color: rgb(245, 245, 245);
  }
`;

const Link = styled.div`
  color: #00000099;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 4px 12px;
  &:hover {
    color: red;
  }
`;

const Menubar = function (props) {
  const user = useContext(UserContext);

  const logOut = function () {
    Api.logout().then(() => {
      props.onLogout();
    });
  };

  return (
    <Menu>
      <Icon src="/images/search.png" alt="search" />
      <NavLink to="/newTitle">
        <Icon src="/images/plus.png" alt="add" />
      </NavLink>
      <Avatar src={user.picture} alt="avatar" />
      <Dropdown id="Dropdown">
        <Link onClick={logOut}>Logout</Link>
      </Dropdown>
    </Menu>
  );
};

export default Menubar;
