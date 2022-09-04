import React from "react";
const HeroCard = ({ movie }) => {
  return (
    <>
      {/* <div className="w-full h-full"> */}
      <div className="h-[300px] w-full">
        <div className="bg-gradient-to-r from-black absolute w-screen h-[300px]"></div>
        <img
          className="w-full h-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={`https://image.tmdb.org/t/p/${movie?.backdrop_path}`}
        />
      </div>
      <div className="absolute w-full top-[50%] flex flex-col sm:flex-row  sm:space-x-3">
        <div>
          <button className=" hover:cursor-pointer hover:opacity-90  transition-all duration-250 text-black bg-gray-200 border-gray-200 sm:ml-2 rounded-[1px] sm:px-4 px-2 py-1">
            Play
          </button>
        </div>
        <div className=" hover:cursor-pointer hover:opacity-90  transition-all duration-250">
          <button className="text-white bg-black border-gray-200 rounded-sm sm:px-4  px-2 py-1">
            Watch now
          </button>
        </div>
      </div>
      <div className="flex flex-col absolute top-[52%] mx-2 text-white">
        <p className="text-[16px] font-bold text-white mt-5">{movie?.title}</p>
        <span className="text-gray-300 text-[12px]">
          {" "}
          Released:{movie?.release_date}
        </span>
        <span className="text-gray-100 text-[8px] max-w-[500px]">
          {movie?.overview}
        </span>
        {/* </div> */}
      </div>
    </>
  );
};

export default HeroCard;
