import { all } from "redux-saga/effects"
import {userRequested} from "./movieSaga"

export function* rootSaga(){
    yield all([userRequested()])
}