import { put, takeLatest, all } from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest("USER_LOGIN", workerSaga);
}

function* workerSaga() {
  try {
    console.log("in workerSaga");
    const response = yield fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const json = yield response.clone().json();
    console.log(json, "in jason");
    yield put({ type: "GET_DATA", json: json });
  } catch (err) {
    console.log("---- error-------", err);
    yield put({ type: "CATCH_ERROR", json: err });
  }
}
