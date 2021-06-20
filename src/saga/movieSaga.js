import { call, put , takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { Creators, storeUsers } from '../reducers/movieReducer';

export function* userRequested(){
    yield takeLatest('GET_USERS',fetchUsers)
}

function* fetchUsers(){
    try {
        const {data}=yield call(getUsers)
        console.log(data);
        yield put(Creators.storeUsers(data))
    } catch (error) {
        console.log(error)
    }
}


const getUsers=()=>{
return axios.get('https://jsonplaceholder.typicode.com/users')
}