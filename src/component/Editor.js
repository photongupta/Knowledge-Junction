import React, {useState} from 'react';
import EditorJs from 'react-editor-js';
import EditorTools from './EditorTool';

const Editor = function (props) {
  const [editorInstance, setEditorInstance] = useState();

  const handleChange = async function () {
    const newContent = await editorInstance.save();
    props.onChange(newContent);
  };

  return (
    <div className="details">
      <EditorJs
        autofocus="true"
        data={props.content}
        instanceRef={(instance) => setEditorInstance(instance)}
        onChange={handleChange}
        tools={EditorTools}
      />
    </div>
  );
};

export default Editor;
