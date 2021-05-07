// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import r from './DetailsReducer';

// const rootReducer = combineReducers({
//   product: r,
// });

// export const store = createStore(rootReducer);

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducers';
import mySaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
