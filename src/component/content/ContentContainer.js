import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Editor from './Editor';
import Api from '../../requestApi';
import Description from './Description';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  position: absolute;
  top: 18%;
  right: 10%;
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const Button = styled.button`
  width: 50px;
  cursor: pointer;
`;

const ContentContainer = function (props) {
  const [content, setContent] = useState(null);
  const [isEditable, setEditable] = useState(false);
  const {id} = useParams();

  const saveContent = async function () {
    setEditable(false);
    await Api.setContent(id, content);
  };

  useEffect(() => {
    Api.getContent(id).then((content) => {
      setContent(content);
    });
  }, [id]);

  return (
    <React.Fragment>
      {isEditable ? (
        <Editor onChange={setContent} content={content} />
      ) : (
        <Description description={content} />
      )}

      <ButtonsContainer>
        <Button
          disabled={isEditable}
          onClick={() => setEditable(true)}
          children="Edit"
        />
        <Button disabled={!isEditable} onClick={saveContent} children="Save" />
      </ButtonsContainer>
    </React.Fragment>
  );
};

export default ContentContainer;
