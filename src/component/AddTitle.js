import React, {useState} from 'react';
import NewTitle from './NewTitle';

const AddTitle = function (props) {
  const [formVisibility, setFormVisibility] = useState(null);

  const toggleFormVisibility = () =>
    setFormVisibility((isVisible) => setFormVisibility(!isVisible));

  return (
    <div>
      <span className="add" onClick={toggleFormVisibility}>
        Add
      </span>
      {formVisibility ? (
        <NewTitle onSubmit={props.onTitle} onRemove={toggleFormVisibility} />
      ) : (
        ''
      )}
    </div>
  );
};

export default AddTitle;
