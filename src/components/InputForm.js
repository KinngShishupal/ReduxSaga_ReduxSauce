import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { Types, Creators } from '../reducers/movieReducer';

const InputForm = ({handleSubmit,values}) => {
    console.log(Types, Creators)
    return (
        <div>
            <Field component="input" name="movieName" placeholder="enter a movie name..."/>
            <Field component="input" name="moviePrice" placeholder="enter the movie price..."/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const movieForm=reduxForm({
    form:'mymovies',
    onSubmit:(values,dispatch)=>{
        dispatch(Creators.addMovie(values))
    }
})


export default (movieForm)(InputForm)
