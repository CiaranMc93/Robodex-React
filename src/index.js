import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
//app has no curly brackets if is a default component
import App from './app';
import {getRobots} from './api';
import Redux, {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import ReactRedux, {Provider} from 'react-redux';

//reducer for query
//state = '' - state is set to '' as the initial state
const queryReducer = (state = '',action) => {
	//switch on the action
	switch(action.type){
		case 'SEARCH': 
			//return the new state with the changed query
			return action.payload.searchTerm;
		case 'ROBOTS_FETCH': 
			//return the new state with the changed query
			return '';
		default:
			return state;
	}
}

//state = [] - state is set to [] as the initial state
const robotsReducer = (state = [],action) => {
	//switch on the action
	switch(action.type){
		case 'ROBOTS_FETCH': 
			//return the new state with the changed robots object
			return action.payload.results;
		default:
			return state;
	}
}

const store = createStore(combineReducers({
	query: queryReducer,
	robots: robotsReducer,
}), applyMiddleware(Thunk,Logger))

export const searchAction = (query) => {

	return {
		type: 'SEARCH',
			payload: {
				searchTerm: query,
			}
	}
}

export const robotsFetchAction = (robots) => {
	return (dispatch) => {
		//dispatch {type: robots_fetch_pending}
		getRobots()
			.then((robots) => dispatch({
				type: 'ROBOTS_FETCH',
				payload: {
					results: robots,
				}
		}))
	}
}


ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>, 
	  document.getElementById('root')
);
