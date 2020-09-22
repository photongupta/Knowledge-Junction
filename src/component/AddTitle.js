import React, {useState} from 'react';
import NewTitle from './NewTitle';

const AddTitle = function (props) {
  const [formVisibility, setFormVisibility] = useState(null);

  const setFormVisible = () => setFormVisibility(true);
  const setFormHidden = () => setFormVisibility(false);

  if (!formVisibility) {
    return <span onClick={setFormVisible}>Add</span>;
  }

  return (
    <div>
      <span onClick={setFormVisible}>Add</span>
      <NewTitle onSubmit={props.onTitle} onRemove={setFormHidden} />
    </div>
  );
};

export default AddTitle;
