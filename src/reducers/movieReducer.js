import { createReducer } from "reduxsauce";
import uuid from "react-uuid";
import { createActions } from "reduxsauce";

const INITIAL_STATE = {
  movies: [],
  apiData: [],
};

export const { Types, Creators } = createActions({
  addMovie: ["moviedetails"],
  deleteMovie: ["id"],
  getUsers:null,
  storeUsers:['data']
});

const addMovie = (state, action) => {
  console.log(action)
  return {
    ...state,
    movies: [...state.movies, { ...action.moviedetails, id: uuid() }],
  };
};

const deleteMovie = (state, action) => {
  return {
    ...state, 
    movies: state.movies.filter((movie) => {
      return movie.id !== action.id;
    }),
  };
};

export const storeUsers=(state,action)=>{
  console.log('called',action)
return{
  ...state,
  apiData:action.data

}
}

const HANDLERS = {
  [Types.ADD_MOVIE]: addMovie,
  [Types.DELETE_MOVIE]: deleteMovie,
  [Types.STORE_USERS]:storeUsers
};

const movieReducer = createReducer(INITIAL_STATE, HANDLERS);
export default movieReducer;
