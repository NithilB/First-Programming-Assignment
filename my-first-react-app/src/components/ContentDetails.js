// src/components/ContentDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ContentDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContentDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e95cd6fe4ec6b4879b60a9708d111e0a`
      );
      setContent(response.data);
    };
    fetchContentDetails();
  }, [id]);

  const addToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.push(content);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Added to watchlist!');
  };

  return (
    <div>
      {content && (
        <>
          <h2>{content.title}</h2>
          <p>{content.overview}</p>
          <button onClick={addToWatchlist}>Add to Watchlist</button>
        </>
      )}
    </div>
  );
};

export default ContentDetails;
