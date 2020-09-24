import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import EditorJs from 'react-editor-js';
import Api from './api';
import EditorTools from './EditorTool';
import Description from './Description';

const Details = function (props) {
  const [content, setContent] = useState(null);
  const [editorInstance, setEditorInstance] = useState();
  const [isEditable, setEditable] = useState(null);
  const {id} = useParams();

  const handleSave = async function () {
    const savedData = await editorInstance.save();
    await setContent(savedData);
  };

  const saveContent = async function () {
    setEditable(false);
    await Api.setContent(id, content);
  };

  useEffect(() => {
    Api.getContent(id || 1).then((content) => {
      setContent(() => Object.assign({}, content));
    });
  }, [id]);

  console.log(content);

  return (
    <div>
      {isEditable ? (
        <div className="details">
          <EditorJs
            style={{maxWidth: '400px'}}
            autofocus="true"
            data={content}
            instanceRef={(instance) => setEditorInstance(instance)}
            onChange={handleSave}
            tools={EditorTools}
          />
        </div>
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
