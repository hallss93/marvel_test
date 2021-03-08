import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import actionsTypes from "../actionsType";
import {
    fetchFailure,
    fetchSuccess,
    showSuccess,
    showFailure,
} from "../actions/characterAction";
import CharacterService from '../../services/SeriesService'

const fetchCharRequest = async (data) => {
    return await CharacterService.getAll(data).catch((error) => {
        throw error.response.data;
    });
};

function* fetchChars({ payload }) {
    try {
        const fetch = yield call(fetchCharRequest, payload);
        yield put(fetchSuccess(fetch.data.data.results));
    } catch (error) {
        yield put(fetchFailure(error));
    }
}

const showCharRequest = async (id) => {
    return await CharacterService.getById(id).catch((error) => {
        throw error.response.data;
    });
};

function* showChar({ payload }) {
    try {
        const show = yield call(showCharRequest, payload);
        yield put(showSuccess(show.data.data.results[0]));
    } catch (error) {
        yield put(showFailure(error));
    }
}

export function* fetch() {
    yield takeEvery(actionsTypes.character.fetch, fetchChars);
}

export function* show() {
    yield takeEvery(actionsTypes.character.show, showChar);
}

export default function* rootSaga() {
    yield all([
        fork(fetch),
        fork(show),
    ]);
}
