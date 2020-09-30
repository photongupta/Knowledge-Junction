import React, {useState} from 'react';

const Input = function (props) {
  const [value, setValue] = useState('');

  const handleChange = async ({target}) => {
    await setValue(target.value);
    props.onChange(target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={value}
      onChange={handleChange}
      required
      placeholder="Search here..."
    />
  );
};
Input.defaultProps = {value: ''};
export default Input;
