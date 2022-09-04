import axios from "axios";
import React, { useState, useEffect } from "react";
import { movieCategory } from "../movies_category/movieCategory";
import HeroCard from "./HeroCard";
const DownloadSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //   fetch api
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const FetchMovies = async () => {
    const response = await axios.get(movieCategory[0].popular_movies);
    setMovies(response.data.results);
  };

  //   useEffect to run
  useEffect(() => {
    FetchMovies();
  }, []);
  return (
    <div className="w-screen h-[300px] relative">
      {/* DownloadSection */}
      <HeroCard movie={movie} />
    </div>
  );
};

export default DownloadSection;
