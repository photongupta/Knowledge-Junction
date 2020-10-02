import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ContentBox from './ContentBox';

const Description = function (props) {
  let blocks = '';

  if (props.description && props.description.blocks) {
    blocks = props.description.blocks.map((element, index) => {
      switch (element.type) {
        case 'paragraph':
          return (
            <div key={index}>
              <div>{ReactHtmlParser(element.data.text)}</div>
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

        case 'delimiter':
          return <h1 key={index}> * * *</h1>;

        default:
          return <p key={index}>No Description.</p>;
      }
    });
  }
  return <ContentBox>{blocks}</ContentBox>;
};

export default Description;
