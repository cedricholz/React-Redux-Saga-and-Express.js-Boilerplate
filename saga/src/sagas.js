import {call, put, takeLatest} from "redux-saga/effects";

import {REQUEST_API_DATA, receiveApiData} from "./actions";

import {fetchData} from './api'


function* getApiData(action) {
    try {
        console.log(action.payload.username);
        const data = yield call(fetchData, action.payload.username, action.payload.email, action.payload.username);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}