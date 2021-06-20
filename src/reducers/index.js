import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
import movieReducer from './movieReducer';

const rootReducer=combineReducers({
    form:formReducer,
    movieReducer
})

export default rootReducer