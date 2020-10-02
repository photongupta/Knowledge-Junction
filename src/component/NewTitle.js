import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
  padding: 18px 30px;
  background: white;
  border-radius: 5px;
  width: 20%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.span`
  position: relative;
  left: 100%;
  font-size: 15px;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: red;
  }
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 60px;
  margin-top: 15px;
`;

const NewTitle = function (props) {
  const history = useHistory();
  const [value, setValue] = useState(props.value);

  const handleChange = (value) => setValue(value);

  const updateHistory = () => history.push('/');

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      props.onTitle(value);
      setValue('');
    }
    updateHistory();
  };

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={updateHistory}>X</CloseButton>
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="Enter title here..." />
          <br />
          <SubmitButton type="submit">Add</SubmitButton>
        </form>
      </Container>
    </Overlay>
  );
};

export default NewTitle;
