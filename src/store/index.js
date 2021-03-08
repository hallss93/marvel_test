import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootSaga from "./sagas/index.js";
import character from "./reducers/characterReducer";

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];

const reducers = combineReducers({
    router: connectRouter(history),
    character,
});

const store = createStore(
    reducers,
    compose(applyMiddleware(routerMiddleware(history), ...middlewares))
);

sagaMiddleware.run(rootSaga);

const storeRedux = {
    store,
    history,
};

export default storeRedux
