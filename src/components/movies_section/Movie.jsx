import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMore } from "react-icons/ai";

const Movie = ({ movie }) => {
  const [bookmark, setBookMark] = useState(true);
  return (
    <div
      key={movie.id}
      className="w-[150px] sm:w-[140px] md:w-[180px] lg:w-[200px] mx-2 my-2 relative inline-block items-center"
    >
      <img
        className="object-cover w-full"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      {/* absolute position for hover title */}
      <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 hover:bg-black/80 transition-all duration-250 hover:cursor-pointer ">
        <p className="text-xs">{movie?.title}</p>
        <span className="absolute bottom-3 right-3 text-xl font-bold">
          {bookmark ? (
            <AiOutlineHeart className="text-md font-bold" />
          ) : (
            <AiOutlineMore className="text-md font-bold" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Movie;
