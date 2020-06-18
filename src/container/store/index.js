// import * as reducers from './reducers';
import * as reducers from '../../container/reducers'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './sagas';
import { rootSaga } from '../../utils/sagas'

const reducerCollection = combineReducers({ 
    onboard: reducers.onboardingReducer
})

/*eslint-disable */
const composeSetup =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
/*eslint-enable */

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducerCollection,
    composeSetup(
        applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store
