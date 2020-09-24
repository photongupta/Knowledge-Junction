import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import EditorJs from 'react-editor-js';
import Api from './api';
import EditorTools from './EditorTool';
import ReactHtmlParser from 'react-html-parser';

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

  let blocks = '';
  if (content && content.blocks) {
    blocks = content.blocks.map((element, index) => {
      switch (element.type) {
        case 'paragraph':
          return (
            <div key={index}>
              <div>{ReactHtmlParser(element.data.text)}</div>
              <br />
            </div>
          );

        case 'code':
          return (
            <div key={index}>
              <textarea
                defaultValue={ReactHtmlParser(element.data.code)}
                className="code"
                cols="90"
                rows="10"
              ></textarea>
              <br />
            </div>
          );

        case 'header':
          return <h2 key={index}>{element.data.text}</h2>;

        case 'link':
          return (
            <a key={index} href={element.data.link}>
              {element.data.link}
            </a>
          );

        case 'delimiter':
          return <h1 key={index}> * * *</h1>;

        default:
          return <p key={index}>No entries</p>;
      }
    });
  }

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
            // placeholder="  "
          />
        </div>
      ) : (
        <div className="details">{blocks}</div>
      )}

      <div className="button">
        <button onClick={() => setEditable(true)}>Edit</button>
        <button onClick={saveContent}>Save</button>
      </div>
    </div>
  );
};

export default Details;
