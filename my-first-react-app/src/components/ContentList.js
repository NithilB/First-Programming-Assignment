// src/components/ContentList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ContentList = ({ content }) => {
  return (
    <div>
      {content.map((item) => (
        <div key={item.id}>
          <h3>{item.title || item.name}</h3>
          <Link to={`/content/${item.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
