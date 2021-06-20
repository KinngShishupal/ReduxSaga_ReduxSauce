import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators } from "../reducers/movieReducer";

const Output = () => {
  const movies = useSelector((state) => state.movieReducer.movies);
  const dispatch=useDispatch()
  const onDeleteHandler=(id)=>{
dispatch(Creators.deleteMovie(id))
  }
  return (
    <div>
      {movies.map((movie) => {
        return (
        <div key={movie.id}>
            <h1>{movie.movieName}</h1>
            <h1>{movie.moviePrice}</h1>
            <button onClick={()=>onDeleteHandler(movie.id)}>Delete</button>
        </div>
        );
      })}
    </div>
  );
};

export default Output;
