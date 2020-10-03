import React, {useState} from 'react';
import EditorJs from 'react-editor-js';
import EditorTools from './EditorTool';
import ContentBox from './ContentBox.js';

const Editor = function (props) {
  const [editorInstance, setEditorInstance] = useState();

  const handleChange = async function () {
    const newContent = await editorInstance.save();
    props.onChange(newContent);
  };

  return (
    <ContentBox>
      <EditorJs
        autofocus="true"
        data={props.content}
        instanceRef={(instance) => setEditorInstance(instance)}
        onChange={handleChange}
        tools={EditorTools}
      />
    </ContentBox>
  );
};

export default Editor;
