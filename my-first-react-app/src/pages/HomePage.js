// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentList from '../components/ContentList';

const HomePage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=e95cd6fe4ec6b4879b60a9708d111e0a`
      );
      setContent(response.data.results);
    };
    fetchContent();
  }, []);

  return (
    <div>
      <h1>Trending Movies, TV Shows, and Anime</h1>
      <ContentList content={content} />
    </div>
  );
};

export default HomePage;
