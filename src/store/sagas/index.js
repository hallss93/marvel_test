import { all } from "redux-saga/effects";
import characterSagas from "./characterSagas";


export default function* rootSaga() {
    yield all([
        characterSagas(),
    ]);
}
