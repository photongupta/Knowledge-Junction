import React, {useEffect, useState} from 'react';
import Api from './api';
import {useParams} from 'react-router-dom';

const Details = function (props) {
  const [content, setContent] = useState();
  const {id} = useParams();

  useEffect(() => {
    Api.getContent(id || 1).then(({content}) => {
      setContent(content);
    });
  });

  return <p>{content || 'Nothing to show'}</p>;
};

export default Details;
