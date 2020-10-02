import React, {useState} from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  outline: none;
  font-size: 20px;
  height: 38px;
  width: 240px;
`;

const Input = function (props) {
  const [value, setValue] = useState('');

  const handleChange = async ({target}) => {
    await setValue(target.value);
    props.onChange(target.value);
  };

  return (
    <InputBox
      className={props.class}
      type="text"
      value={value}
      onChange={handleChange}
      required
      placeholder={props.placeholder}
    />
  );
};

Input.defaultProps = {value: ''};

export default Input;
