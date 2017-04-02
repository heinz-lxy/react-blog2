import React from 'react'
import {render} from 'react-dom'
import {combineReducers,createStore,bindActionCreators,applyMiddleware} from 'redux'
import {connect,Provider} from 'react-redux'

import Blog from './components/Blog'
import store from './store'
import * as actionCreators from './actions'

//create root component based on component Blog
const App = connect(
	state => ({state}),
	dispatch => ({
		actions:bindActionCreators(actionCreators,dispatch)
	})
)(Blog)

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('container')
);
