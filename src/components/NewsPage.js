import React from 'react';
import data from './data';
import News from './News';

const NewsPage = () => (
  <div>
    <h1>News</h1>
    {
    data.map(news => (
      <News
        key={news.id}
        news={news}
      />
    ))
    }
  </div>
);

export default NewsPage;
