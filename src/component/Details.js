import React, {useEffect, useState} from 'react';
import Api from './api';
import {useParams} from 'react-router-dom';

const Details = function (props) {
  const [content, setContent] = useState();
  const {id} = useParams();

  useEffect(() => {
    Api.getContent(id).then(({content}) => {
      setContent(content);
    });
  });

  return <p>{content}</p>;
};

export default Details;
