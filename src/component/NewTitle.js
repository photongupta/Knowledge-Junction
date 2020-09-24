import React, {useState} from 'react';
import '../popup.css';
import {useHistory} from 'react-router-dom';

const NewTitle = function (props) {
  const history = useHistory();
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      props.onTitle(value);
      setValue('');
    }
    history.push('/');
  };

  return (
    <div className="overlay">
      <div className="popup">
        <a className="close" href="/">
          X
        </a>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={value}
            onChange={handleChange}
            required
            placeholder="Enter title here..."
            autoFocus
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
