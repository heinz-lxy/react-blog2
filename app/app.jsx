import React from 'react'
import {render} from 'react-dom'
import {combineReducers,createStore,bindActionCreators,applyMiddleware} from 'redux'
import {connect,Provider} from 'react-redux'

import Blog from './components/Blog'
import store from './store'
import * as actionCreators from './actions'

// let $=require('jquery')
// $.ajax({  
//   url: 'http://127.0.0.1:1724/deleteessay',  
//   type: 'post',
//   data:{id:1},  
//   dataType: 'json',  
//   timeout: 1000,  
//   cache: false,  
//   success:function(data){
//     console.log('0404')
//   },
//   error:function(err){
    
//   }
// }) 

 //s1a
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
