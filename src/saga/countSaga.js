import {put, takeEvery} from "redux-saga/effects"
import {ASYNC_INCREMENT, countIncrementAction} from "../store/countReduser";


const delay = (ms) => new Promise(res => setTimeout(res,ms))


function* incrementWorker () {
   yield delay( 1000)
   yield put(countIncrementAction())
}


function* decrementWorker () {

}

export function* countWatcher () {
   yield takeEvery(ASYNC_INCREMENT,incrementWorker)
}