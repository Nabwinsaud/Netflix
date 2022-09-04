import React from "react";
import { movieCategory } from "../movies_category/movieCategory";
import Allmovies from "./Allmovies";

// Creating a varibale for our movies section
const popular_Movies = movieCategory[0].popular_movies;
const trending_Movies = movieCategory[1].trending_movies;
const top_rated_Movies = movieCategory[2].top_rated_movies;
const FetchMovie = () => {
  return (
    <div className="bg-black text-white">
      <Allmovies title="popular movies" fetch_movies={popular_Movies} />
      <Allmovies title="Trending movies" fetch_movies={trending_Movies} />
      <Allmovies title="topRated movies" fetch_movies={top_rated_Movies} />
    </div>
  );
};

export default FetchMovie;
