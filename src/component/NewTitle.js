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
        <div
          className="close"
          onClick={() => {
            history.push('/');
          }}
        >
          X
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="new-title"
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
