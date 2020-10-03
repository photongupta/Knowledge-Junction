import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentBox from './ContentBox';
import styled from 'styled-components';

const Code = styled.textarea`
  line-height: 1.6em;
  font-size: 15px;
  color: #41314e;
  background: #f8f7fa;
  border: 1px solid #f1f1f4;
  resize: vertical;
`;

const Description = function (props) {
  let blocks = '';

  if (props.description && props.description.blocks) {
    blocks = props.description.blocks.map((element, index) => {
      switch (element.type) {
        case 'paragraph':
          return <p key={index}>{ReactHtmlParser(element.data.text)}</p>;

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

        case 'code':
          return (
            <div key={index}>
              <Code
                defaultValue={ReactHtmlParser(element.data.code)}
                cols="90"
                rows="10"
              />
              <br />
              <br />
            </div>
          );

        default:
          return <p key={index}>No Description.</p>;
      }
    });
  }

  return <ContentBox>{blocks}</ContentBox>;
};

export default Description;
