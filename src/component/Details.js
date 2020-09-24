import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Editor from './Editor';
import Api from './api';
import Description from './Description';

const Details = function (props) {
  const [content, setContent] = useState(null);
  const [isEditable, setEditable] = useState(false);
  const {id} = useParams();

  const updateContent = function (newContent) {
    setContent(newContent);
  };

  const saveContent = async function () {
    console.log('hi');
    setEditable(false);
    await Api.setContent(id, content);
  };

  useEffect(() => {
    Api.getContent(id || 1).then((content) => {
      setContent(() => content);
    });
  }, [id]);

  return (
    <div>
      {isEditable ? (
        <Editor onChange={updateContent} content={content} />
      ) : (
        <Description description={content} />
      )}

      <div className="button">
        <button onClick={() => setEditable(true)}>Edit</button>
        <button onClick={saveContent}>Save</button>
      </div>
    </div>
  );
};

export default Details;
