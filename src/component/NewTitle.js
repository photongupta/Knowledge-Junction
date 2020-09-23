import React, {useState} from 'react';
import '../popup.css';

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
    <div className="overlay">
      <div className="popup">
        <span className="close" onClick={props.onRemove}>
          X
        </span>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

NewTitle.defaultProps = {value: ''};

export default NewTitle;
