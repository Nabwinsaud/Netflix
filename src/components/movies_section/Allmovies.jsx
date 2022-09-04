import React, { useState, useEffect } from "react";
//import react icons
import axios from "axios";
import Movie from "./Movie";
const Allmovies = ({ title, fetch_movies }) => {
  const [allMovie, setAllMovies] = useState([]);

  const getAllMovies = async () => {
    const response = await axios.get(fetch_movies);
    setAllMovies(response.data.results);
  };

  //   calling useEffect

  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <>
      <h1 className="text-sm my-2 px-2 ml-6 capitalize">{title}</h1>
      <div className="relative flex items-center justify-center">
        <div className="slider w-full max-w-[95%] mx-auto my-0  ">
          {allMovie?.map((movie, id) => {
            return (
              //   <div className="inline-flex">
              <Movie movie={movie} key={id} />
              //   </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Allmovies;
