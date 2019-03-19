/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const News = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, descriptions } = props.news;
  return (
    <div>
      <h2>{title}</h2>
      <p>{descriptions}</p>
    </div>
  );
};

export default News;
