import React, {useEffect, useState} from 'react';
import appApi from './api';
import {useParams} from 'react-router-dom';

const Details = function (props) {
  const [content, setContent] = useState();
  const {id} = useParams();

  useEffect(() => {
    appApi.getContent(id).then(({content}) => {
      setContent(content);
    });
  });

  return <p>{content}</p>;
};

export default Details;
