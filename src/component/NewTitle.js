import React, {useState} from 'react';

const NewTitle = function (props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      props.onSubmit(value);
      props.onRemove();
      setValue('');
    }
  };

  return (
    <div style={{border: '1px solid black'}}>
      <span onClick={props.onRemove}>X</span>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

NewTitle.defaultProps = {value: ''};

export default NewTitle;
