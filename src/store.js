import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const iniState = {
	data: [],
	datum: {}
}

export default function configureStore(initialState=iniState) {
 	return createStore(
  		rootReducer,
  		initialState,
   		applyMiddleware(thunk)
 	);
}