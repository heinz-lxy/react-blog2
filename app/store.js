import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'; //后端交互 fetch

import rootReducer from './reducers';

export default applyMiddleware( //create store with middlewares
	thunkMiddleware,
	promiseMiddleware()

)(createStore)(rootReducer)
